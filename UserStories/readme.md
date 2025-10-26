# User Stories für den 24/7-Hochschul-Agenten

## Projektbeschreibung
Ziel des Projekts ist die Entwicklung eines KI-gestützten Support-Bots, der rund um die Uhr Fragen von Studierenden und Studieninteressierten beantwortet. Der Bot wird organisatorische und studienbezogene Informationen bereitstellen, den Hochschulservice entlasten und schnelle, personalisierte Antworten bieten. Dies geschieht durch die Nutzung von KI-Technologien wie OpenAI und n8n-Workflow-Automatisierung.

## Geteilte User Stories

### Anmeldung & Rollen
#### Administrator
- **Als Administrator** möchte ich **Benutzer anlegen, bearbeiten und löschen**, um **Zugriff und Rollen im System zu verwalten**.
- **Als Administrator** möchte ich **verschiedene Rollen zuweisen (Administrator, Support-Mitarbeiter, Studierender, Studieninteressierter)**, um **die Berechtigungen für den Zugang zu Funktionen und Daten zu regeln**.

#### Support-Mitarbeiter
- **Als Support-Mitarbeiter** möchte ich **alle eingehenden Anfragen im Dashboard einsehen**, um **die Anzahl der automatisch beantworteten und manuell zu bearbeitenden Anfragen zu überwachen**.
- **Als Support-Mitarbeiter** möchte ich **eine Benachrichtigung erhalten**, wenn eine Anfrage manuell bearbeitet werden muss, um **die Bearbeitung effizient zu organisieren**.

#### Studieninteressierter & Studierender
- **Als Studieninteressierter** möchte ich **über den Chatbot schnell Antworten auf Fragen zu Bewerbung, Zulassung und Fristen erhalten**, um **meine Anfragen schnell und rund um die Uhr zu klären**.
- **Als Studierender** möchte ich **meine häufig gestellten Fragen im Chatbot speichern**, um **zukünftig schneller auf relevante Informationen zugreifen zu können**.

### Product Owner
- **Als Product Owner** möchte ich **den 24/7-Hochschul-Agenten in einem responsive Web-Frontend zur Verfügung stellen**, um **den bestmöglichen Zugriff von allen Endgeräten zu ermöglichen**.
- **Als Product Owner** möchte ich **die KI-Anfragen in einer Datenbank speichern**, damit **die Antworten nachvollziehbar und analysierbar bleiben**.

---

## Backend User Stories
- **Als Product Owner** möchte ich **einen Workflow für den Chatbot integrieren**, der Anfragen kategorisiert, um **die Antworten automatisch oder halbautomatisch zu generieren**.
- **Als Product Owner** möchte ich **eine KI-Schnittstelle bereitstellen**, die den Inhalt von Anfragen automatisch analysiert und kategorisiert, um **die passende Antwort zu finden**.
- **Als Product Owner** möchte ich **die Antworten in einer relationalen Datenbank speichern**, damit **alle generierten Antworten gespeichert und abgerufen werden können**.

---

## Frontend User Stories

### Allgemein / Anmeldung
- **Als Benutzer** möchte ich **eine Login-Seite sehen**, um **mich mit meinen Zugangsdaten anzumelden** und Zugang zu den Funktionen des Systems zu erhalten.

### Studierender / Studieninteressierter Sicht
- **Als Studierender** möchte ich **über den Chatbot Antworten auf häufige Fragen zur Hochschulorganisation erhalten**, um **schnell und unkompliziert Hilfe zu bekommen**.
- **Als Studieninteressierter** möchte ich **eine einfache Übersicht der häufigsten Fragen sehen**, um **schnell mit relevanten Informationen versorgt zu werden**.

### Administrator-Sicht
- **Als Administrator** möchte ich **ein Dashboard mit den eingehenden Anfragen sehen**, um **die Bearbeitung und Automatisierung von Anfragen zu überwachen**.

### Support-Mitarbeiter-Sicht
- **Als Support-Mitarbeiter** möchte ich **mit einem Klick eine Anfrage manuell bearbeiten können**, um **schnell auf individuelle Anfragen reagieren zu können**.

---
