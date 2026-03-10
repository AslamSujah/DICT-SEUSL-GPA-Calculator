# SEUSL ICT GPA / CGPA Calculator

A colourful and responsive **web application** to calculate **Semester GPA** and track **CGPA** for students of the **Department of ICT, Faculty of Technology, South Eastern University of Sri Lanka (SEUSL)**.

> Live App: https://aslamsujah.github.io/DICT-SEUSL-GPA-Calculator/  
> Developer: **A. Mohamed Aslam Sujah** — https://github.com/AslamSujah

---

## Table of Contents
- [Overview](#overview)
- [Key Features](#key-features)
- [How GPA/CGPA Works in This App](#how-gpacgpa-works-in-this-app)
- [How to Use](#how-to-use)
- [Printing / Save as PDF (Colorful Output)](#printing--save-as-pdf-colorful-output)
- [Run Locally](#run-locally)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Developer](#developer)

---

## Overview
This project was created to help DICT students quickly:
- enter grades for each semester,
- compute **Semester GPA**,
- save results semester-by-semester,
- maintain an overall **CGPA**, and
- generate a **printable report** (PDF).

The application runs fully in the browser (no backend server required).

---

## Key Features
### GPA & CGPA
- **Semester GPA calculation** based on selected GPA-counted courses.
- **CGPA tracking** based on saved semester records.
- Saved data is kept in the browser using **LocalStorage**.

### Course Coverage
- Supports **Year 1 & Year 2 (Common)** course sets.
- Supports **Year 3 & Year 4** with specializations.
- Elective course selection is supported where applicable.

### Grade Handling
- **GPA-counted** courses affect GPA/CGPA calculations.
- **NGPA** courses can still have grades entered and will show in reports, but **do not affect** GPA/CGPA.

### Reporting
- Generates a well-formatted **print view**
- Can **Save as PDF** using the browser print dialog.

### UI/UX
- Colourful design
- Responsive layout for mobile and desktop
- Table supports horizontal scrolling on small screens so all columns (including **Grade Point**) remain accessible.

---

## How GPA/CGPA Works in This App
### Grade Points
The app converts letter grades into grade points (based on the configured scale in the code).

### Semester GPA Formula
For GPA-counted courses only:

\[
\text{Semester GPA} = \frac{\sum (\text{Course Credits} \times \text{Grade Points})}{\sum (\text{Course Credits})}
\]

### CGPA
CGPA is computed using the saved semester records (again, GPA-counted courses only).

> Note: Your exact GPA/CGPA rules may differ depending on faculty policy. This app follows the configured course-credit and GPA-counted flags in the project data.

---

## How to Use
1. Open the app:
   - https://aslamsujah.github.io/DICT-SEUSL-GPA-Calculator/
2. Enter student information (if provided in the form)
3. Select:
   - **Year**
   - **Semester**
   - **Specialization** (if Year 3/4)
4. Select **electives** (if displayed)
5. In **Enter Grades**, select grades for subjects
6. Click **Calculate** to view GPA/summary
7. Click **Save Semester** to store the results
8. Use **Print / Save as PDF** to generate the report

---

## Printing / Save as PDF (Colorful Output)
Browsers may not print background colors by default.

### Chrome / Edge
1. Click **Print / Save as PDF**
2. Open **More settings**
3. Enable **Background graphics**
4. Save as PDF

### Firefox
Enable **Print backgrounds** in the print settings.

### Tip
The project includes print CSS rules including:

- `print-color-adjust: exact;`
- `-webkit-print-color-adjust: exact;`

These improve the chance of keeping colours in the PDF, but the browser print settings still matter.

---

## Run Locally
This is a static web project. No Node/Vite is required.

### Option 1: VS Code Live Server (Recommended)
1. Install **VS Code**
2. Install extension **Live Server**
3. Open the project folder
4. Right-click `index.html` → **Open with Live Server**

### Option 2: Python HTTP Server
```bash
cd DICT-SEUSL-GPA-Calculator
python -m http.server 5500
```

Open:
- http://localhost:5500

### Option 3: Open `index.html` directly
You can double-click `index.html` and open it in a browser, but using a local server is recommended for best behavior.

---

## Project Structure
Typical structure:

- `index.html` — UI layout
- `styles.css` — colourful UI theme + responsive styles + print styles
- `app.js` — application logic (course selection, grade input, GPA/CGPA calculations, local save, print rendering)

---

## Customization
### Update footer name / GitHub profile
In the printable footer section (inside `#printArea`), update:
- Name
- GitHub username text/link

### Adjust layout widths
In `styles.css`, desktop layout width is controlled by:
- `.layout { grid-template-columns: ... }`

### Make grade dropdown wider
Update:
- `.gradeSelect { width/min-width: ... }`

### Change theme colors
Edit CSS variables under `:root`:
- `--primary1`, `--primary2`, `--accent1`, etc.

---

## Troubleshooting
### “My PDF is not colourful”
- Enable **Background graphics / Print backgrounds** in browser print settings.
- Ensure print CSS includes `print-color-adjust: exact`.

### “Grade Point column not visible on mobile”
- The table uses horizontal scroll on small screens.
- Swipe left/right inside the table area to see all columns.

### “Saved data disappeared”
- Data is stored in **LocalStorage** in your browser.
- Clearing browser data/cache may remove saved semesters.

---

## License
This project is provided as-is for educational use.  
(If you want, add a formal license such as MIT.)

---

## Developer
Developed by **A. Mohamed Aslam Sujah**  
GitHub: https://github.com/AslamSujah