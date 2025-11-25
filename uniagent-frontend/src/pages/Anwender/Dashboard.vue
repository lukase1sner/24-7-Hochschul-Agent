<template>
  <AnwenderLayout>
    <div class="dashboard-main-wrapper">
      <div class="dashboard-content">
        <h2 class="dashboard-admin-title">
          Willkommen, {{ user.firstName }} {{ user.lastName }}!
        </h2>

        <!-- 3D CAROUSEL -->
        <div
          class="dash-3d-wrapper"
          ref="carouselRef"
          @mousedown="startDrag"
          @mousemove="onDrag"
          @mouseup="endDrag"
          @mouseleave="endDrag"
          @touchstart.prevent="startDrag"
          @touchmove.prevent="onDrag"
          @touchend="endDrag"
        >
          <div
            class="dash-3d-carousel"
            :class="{ 'is-dragging': isDragging }"
            :style="{ '--rotation': rotationDeg + 'deg' }"
          >
            <div
              v-for="(card, index) in cards"
              :key="card.id"
              class="dash-3d-item"
              :class="card.colorClass"
              :style="{ '--i': index }"
              @click="handleCardClick(card)"
            >
              <div class="dash-3d-inner">
                <span class="dash-3d-label">
                  {{ card.label }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- /3D CAROUSEL -->
      </div>
    </div>
  </AnwenderLayout>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import "../../styles/Dashboard.css";
import AnwenderLayout from "../../layouts/AnwenderLayout.vue";

const router = useRouter();

// You can later fill this from store / backend
const user = ref({
  firstName: "",
  lastName: "",
});

// ----- 3D CAROUSEL STATE -----
const cards = ref([
  {
    id: "create-user",
    label: "Benutzer anlegen",
    route: "/administrator/benutzeranlegen",
    colorClass: "card-color-1",
  },
  {
    id: "manage-user",
    label: "Benutzerverwaltung",
    route: "/administrator/benutzerverwaltung",
    colorClass: "card-color-2",
  },
  {
    id: "chatbot",
    label: "Zum Chatbot",
    route: "/chatbot",
    colorClass: "card-color-3",
  },
  {
    id: "home",
    label: "Zur Startseite",
    route: "/",
    colorClass: "card-color-4",
  },
]);

const currentIndex = ref(0); // 0..3
const isDragging = ref(false);
const dragStartX = ref(0);
const containerWidth = ref(1);
const dragOffsetPx = ref(0);
const carouselRef = ref(null);

// 4 cards -> 360 / 4 = 90° steps
const rotationDeg = computed(() => -currentIndex.value * 90 + dragOffsetPx.value);

const getClientX = (event) => {
  if (event.touches && event.touches[0]) return event.touches[0].clientX;
  if (event.changedTouches && event.changedTouches[0])
    return event.changedTouches[0].clientX;
  return event.clientX;
};

const startDrag = (event) => {
  if (!carouselRef.value) return;
  isDragging.value = true;
  dragStartX.value = getClientX(event);
  containerWidth.value = carouselRef.value.offsetWidth || 1;
  dragOffsetPx.value = 0;
};

const onDrag = (event) => {
  if (!isDragging.value) return;
  const currentX = getClientX(event);
  const delta = currentX - dragStartX.value;

  // convert pixels to rotation (roughly: full width drag ~ 90deg)
  dragOffsetPx.value = (delta / containerWidth.value) * 90;
};

const endDrag = () => {
  if (!isDragging.value) return;
  isDragging.value = false;

  const deltaDeg = dragOffsetPx.value;
  const threshold = 15; // degrees to decide next / prev

  if (deltaDeg < -threshold) {
    // move right
    currentIndex.value = (currentIndex.value + 1) % cards.value.length;
  } else if (deltaDeg > threshold) {
    // move left
    currentIndex.value =
      (currentIndex.value - 1 + cards.value.length) % cards.value.length;
  }

  // snap back to exact position
  dragOffsetPx.value = 0;
};

const handleCardClick = (card) => {
  if (card?.route) router.push(card.route);
};
</script>
