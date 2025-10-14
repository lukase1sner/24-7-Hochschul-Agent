# 24/7-Hochschul-Agent

# Projektstrukturplan (PSP)

**Projektname:** 24/7-Hochschul-Agent  
**Projektart:** Hochschulprojekt (ca. 12 Wochen)  
**Gruppengröße:** 5 Personen  

---

## Projektteam

| Rolle | Name |
|-------|------|
| **Gruppensprecher** | Lukas Eisner |
| **Teammitglieder** | Ensar Cölkesen, Ideal Dana, Natacha Megnegne, Bernd Wiederuh |

---

## Projektvision

Ein KI-gestützter **Support-Bot** beantwortet rund um die Uhr organisatorische und studienbezogene Fragen von Studierenden und Studieninteressierten – **automatisiert, aber personalisiert**.  
Ziel ist es, den Hochschulservice zu **entlasten**, schnelle und **konsistente Auskünfte** zu ermöglichen und die **Zugänglichkeit der Hochschule zu verbessern**.

---

## Projektbeschreibung

Über einen **Chat- oder E-Mail-Trigger** werden Anfragen an einen **n8n-Workflow** weitergeleitet.  
Dieser analysiert mithilfe einer **KI (z. B. OpenAI API)** den Inhalt, kategorisiert die Anfrage und entscheidet, ob sie:

- automatisch beantwortet,  
- teilautomatisiert überprüft oder  
- an einen menschlichen Support weitergeleitet wird.  

Ein **Frontend-Dashboard** zeigt Support-Mitarbeitenden:

- Anzahl eingegangener Anfragen  
- Anzahl automatisch beantworteter Anfragen  
- Offene Anfragen zur manuellen Bearbeitung  

**Beispiel:**  
> „Wie kann ich mich für das nächste Semester rückmelden?“  
> → Kategorie *Verwaltung* → System ruft Fristen, Zahlungslink & Anleitung ab → automatische Antwort an den Studierenden

---

## Technologien

- **Workflow-Automatisierung:** [n8n](https://n8n.io/)  
- **KI-Integration:** OpenAI API  
- **Frontend:** Vue.js  
- **Wissensquelle:** FAQ-/Wissensdatenbank & Hochschulwebsite-Schnittstelle  
- **Backend/Hosting:** Node.js / Cloud (optional)

---

## Projektstruktur (PSP – Arbeitspakete)

| Nr. | Arbeitspaket | Beschreibung | 
|-----|---------------|---------------|
| **1.0** | Projektmanagement | Planung, Organisation, Kommunikation, Meilenstein-Controlling | 
| **2.0** | Anforderungsanalyse & Konzept | Definition der Funktionen, Datenflüsse und Nutzerrollen | 
| **3.0** | Architekturdesign | Systemarchitektur (n8n-Workflow, API-Design, Frontend-Kommunikation) | 
| **4.0** | KI-Integration | Einbindung der OpenAI API in n8n, Kategorieerkennung, Textgenerierung | 
| **5.0** | Frontend-Entwicklung | Dashboard für Support-Team (Vue.js) | 
| **6.0** | Datenmanagement | Aufbau/Anbindung der Wissensdatenbank & Datenquellen | 
| **7.0** | Test & Qualitätssicherung | Funktionstests, Unit Tests, Performance & KI-Antwortqualität | 
| **8.0** | Dokumentation & Präsentation | Technische & schriftliche Dokumentation, Präsentationserstellung | 

---

## Meilensteinplan 

| Meilenstein | Ergebnis |
|--------------|-----------|
| Kickoff & Gruppenorganisation | Rollenverteilung, Kommunikationskanäle, Projektziele festgelegt |
| Anforderungsanalyse & Konzeptphase | Use-Cases, Datenflussdiagramm, Systemübersicht |
| Architekturdesign | Technische Architektur, Schnittstellen, Mockups |
| Implementierung Backend & Workflow (n8n + OpenAI) | Funktionierender Workflow-Prototyp |
| Frontend-Entwicklung (Vue.js Dashboard) | Visualisierung der Anfragen & Status-Übersicht |
| Integration & Testphase | End-to-End-Funktionstest, Fehlerbehebung |
| Dokumentation & Präsentation | Abschlussbericht, Code-Review, finale Demo |

---

## Projektergebnisse

- Funktionsfähiger **Prototyp eines 24/7-Hochschulassistenzsystems**  
- **Frontend-Dashboard** zur Verwaltung von Anfragen  
- **Automatisierte Anfrageverarbeitung** via n8n & OpenAI  
- **Technische Dokumentation & Präsentation**

---

## Erweiterungsmöglichkeiten

- Anpassbare **Datenquellen** über Administrationsoberfläche  
- **Mehrsprachigkeit** für internationale Studierende  
- **Individuelles Look & Feel** für andere Hochschulen  
- **Statistik-Dashboard** zur Analyse von Anfragen (z. B. häufige Themen)

---

## Ziele und Mehrwert

- Entlastung der Support-Mitarbeitenden  
- Schnellere Antwortzeiten für Studierende  
- Reduktion des E-Mail-Aufkommens  
- Verbesserung der Servicequalität  
- Förderung der Einschreibungsquote durch direkte Hilfe  

---
