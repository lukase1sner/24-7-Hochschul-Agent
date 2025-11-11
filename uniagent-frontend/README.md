# Installation

Dieses Projekt benötigt Node.js 

---

## 1. Node.js installieren

Windows

1. Besuche [https://nodejs.org](https://nodejs.org)
2. Lade die **LTS-Version (Long Term Support)** herunter
3. Führe den Installer aus und folge den Anweisungen (Standardoptionen beibehalten)
4. Nach der Installation prüfen:
   ```powershell
   node -v
   npm -v

macOS

Stelle sicher, dass **Homebrew** installiert ist.  
Falls nicht, führe diesen Befehl im Terminal aus:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Prüfe danach:
```bash
brew -v
```

Node.js Installation mit Homebrew

1. Homebrew aktualisieren
```bash
brew update
```

2. Node.js installieren
```bash
brew install node
```

3. Installation prüfen
```bash
node -v
npm -v
```

Wenn beide Befehle (`node -v` und `npm -v`) eine Versionsnummer ausgeben,  
ist die Installation erfolgreich abgeschlossen.

---

## 2. Github Repository klonen

Voraussetzungen

- **Git** ist installiert → prüfen:
  ```bash
  git --version
  ```
  Wenn kein Ergebnis kommt, installiere Git:
  - **macOS:** `brew install git`
  - **Windows:** [Git for Windows herunterladen](https://git-scm.com/download/win)

- **Visual Studio Code** ist installiert → [https://code.visualstudio.com](https://code.visualstudio.com)

Repository klonen

1. Öffne in VS Code ein neues Terminal
   
2. Klone das Repository 
   ```bash
   git clone https://github.com/lukase1sner/24-7-Hochschul-Agent.git
   ```
   
3. Wechsel in das geklonte Projekt:
   ```bash
   cd 24-7-Hochschul-Agent
   ```

4. Projekt in Visual Studio Code öffnen
   ```bash
   code .
   ```

Dieser Befehl öffnet das aktuelle Verzeichnis direkt in VS Code.  
Falls `code` im Terminal nicht erkannt wird:

1. Öffne VS Code  
2. Drücke `Cmd + Shift + P` (macOS) oder `Ctrl + Shift + P` (Windows/Linux)  
3. Suche: **“Shell Command: Install 'code' command in PATH”**  
4. Danach funktioniert der `code .`-Befehl im Terminal.

---

### 3. In den Frontend Ordner wechseln:
   ```bash
   cd uniagent-frontend
   ```

---

### 4. Abhängigkeiten installieren:
   ```bash
   npm install
   ```

---

### 5. Entwicklungsserver starten:
   ```bash
   npm run dev
   ```

---

### 6. Anwendung aufrufen

Nach dem Start ist die Anwendung erreichbar unter:  
**http://localhost:5173**

---

### Ordnerstruktur – `src/`

Der `src/`-Ordner enthält den gesamten Quellcode des Frontends

Übersicht

```text
src/
├── api/
├── assets/
├── components/
├── composables/
├── layouts/
├── pages/
├── router/
├── stores/
├── styles/
├── types/
├── utils/
├── App.vue
└── main.ts
```

api/  
Hier kommen Funktionen für API-Aufrufe rein, die mit dem Backend kommunizieren.  

assets/  
Beinhaltet statische Ressourcen wie Bilder, Logos, Icons oder Fonts,  
die in Komponenten eingebunden werden.

components/  
Enthält wiederverwendbare UI-Komponenten wie Buttons, Modals oder Karten,  
die in verschiedenen Seiten verwendet werden.

composables/  
In `composables/` kommen Funktionen mit Logik,  
die keine eigene Ansicht (HTML) haben,  
aber mehrfach im Projekt gebraucht werden (z. B. `useChat`, `useUser`, `useApi`).  

layouts/  
Enthält Layout-Komponenten, die das Grundgerüst der Seiten bilden  
(z. B. Header, Footer, Sidebar).

pages/  
Hier liegen die Seiten-Komponenten, die über den Router aufgerufen werden  
(z. B. `HomePage.vue`, `ChatPage.vue`).

router/  
Beinhaltet die Routing-Konfiguration (`index.ts`),  
in der definiert wird, welche Seite bei welcher URL geladen wird.

stores/  
Enthält globale Zustände mit Pinia.  
Beispiel: `userStore.ts` speichert Userdaten oder Sitzungsstatus.  

styles/  
Globale CSS- oder SCSS-Dateien, Tailwind-Konfigurationen oder Design-Variablen,  
die im ganzen Projekt verwendet werden.

types/  
Beinhaltet TypeScript-Interfaces und Typdefinitionen,  
um API-Daten, Props oder interne Strukturen sauber zu typisieren.

utils/  
Enthält Hilfsfunktionen und Helper-Methoden,  
z. B. für Formatierungen, Datumsfunktionen oder Validierungen.

App.vue  
Die Root-Komponente der Anwendung – hier wird das Hauptlayout und der Router eingebunden.

main.ts  
Einstiegspunkt des Frontends – initialisiert Vue, lädt Router, Pinia und globale Styles.
