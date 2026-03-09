/* ====== Grading ====== */
const GRADE_POINTS = {
  "A+": 4.00,
  "A":  4.00,
  "A-": 3.70,
  "B+": 3.30,
  "B":  3.00,
  "B-": 2.70,
  "C+": 2.30,
  "C":  2.00,
  "C-": 1.70,
  "D":  1.30,
  "E":  0.00
};
const GRADES = Object.keys(GRADE_POINTS);

function round2(n) {
  return Math.round(n * 100) / 100;
}
function classifyDegreeByGPA(cgpa) {
  if (cgpa >= 3.7) return "First Class (GPA criterion met)";
  if (cgpa >= 3.3) return "Second Class (Upper Division) (GPA criterion met)";
  if (cgpa >= 3.0) return "Second Class (Lower Division) (GPA criterion met)";
  if (cgpa >= 2.0) return "Pass";
  return "Degree Incomplete";
}

/* ====== Curriculum data (from your images) ====== */
function C(code, title, credits, countsForGPA=true, extra={}) {
  return { code, title, credits, countsForGPA, ...extra };
}

const curriculumCommon = {
  "1": {
    "1": {
      courses: [
        C("CIS11012","Essentials of ICT and PC Applications",2,true),
        C("SWT11012","Fundamentals of Programming",2,true),
        C("CIS11022","Database Design",2,true),
        C("CIS11032","Logic designing and Computer Organization",2,true),
        C("CMS11012","Mathematics for ICT",2,true),
        C("CMS11022","English I",2,false,{category:"NGPA"}),
        C("CMS11031","Tamil Language (For Sinhala Speaking Students)",1,false,{category:"NGPA"}),
        C("CMS11041","Sinhala Language (For Tamil Speaking Students)",1,false,{category:"NGPA"}),
        C("CIS11042","Practical for Essentials of ICT and PC Applications",2,true),
        C("SWT11021","Practical for Fundamental of Programming",1,true),
        C("CIS11051","Practical for Database Design",1,true)
      ]
    },
    "2": {
      courses: [
        C("SWT12012","Object Oriented Programming",2,true),
        C("SWT12022","Web systems and Technologies",2,true),
        C("NST12012","Computer Networks",2,true),
        C("MGT12012","Multimedia and Graphic Design",2,true),
        C("CIS12012","Social Computing",2,true),
        C("CMS12012","Statistics",2,true),
        C("CMS12022","English II",2,false,{category:"NGPA"}),
        C("SWT12031","Practical for Object Oriented Programming",1,true),
        C("SWT12041","Practical for Web systems and Technologies",1,true),
        C("MGT12021","Practical for Multimedia and Graphic Design",1,true),
        C("CMS12031","Practical for Statistics",1,true)
      ]
    }
  },
  "2": {
    "1": {
      courses: [
        C("SWT21012","Data Structures and Algorithms",2,true),
        C("CIS21012","Platform Technologies",2,true),
        C("NST21012","Network Switching and Routing",2,true),
        C("UCT21011","Digital Electronic Systems",1,true),
        C("SWT21022","Object Oriented Analysis and Design",2,true),
        C("CIS21022","Social and Professional Issues in ICT",2,true),
        C("SWT21032","Practical for Data Structures and Algorithms",2,true),
        C("CIS21031","Practical for Platform Technologies",1,true),
        C("NST21022","Practical for Network Switching and Routing",2,true),
        C("UCT21022","Practical for Digital Electronic Systems",2,true)
      ]
    },
    "2": {
      courses: [
        C("SWT22012","Internet Application Development",2,true),
        C("CIS22012","Distributed and Cloud computing",2,true),
        C("CIS22022","Information assurance and forensics",2,true),
        C("CIS22032","E-commerce - Strategies and architecture",2,true),
        C("UCT22011","Microcontroller system Programing",1,true),
        C("CMS22012","Leadership & Communication Skills",2,true),
        C("SWT22022","Practical for Internet Application Development",2,true),
        C("CIS22042","Practical for Distributed and Cloud computing",2,true),
        C("UCT22022","Practical for Microcontroller system Programing",2,true)
      ]
    }
  }
};

const curriculumSoftware = {
  "3": {
    "1": {
      courses: [
        C("SWT31012","Software Engineering",2,true),
        C("CIS31012","ICT Project management",2,true),
        C("UCT31012","Artificial Intelligence",2,true),
        C("SWT31022","Software Verification and Quality Assurance",2,true),
        C("CMS31022","Research Methodologies for ICT",2,true),
        C("UCT31021","Practical for Artificial Intelligence",1,true)
      ],
      electiveGroups: [
        {
          id: "Y3S1_ELECTIVE",
          label: "Elective (Theory) + Practical",
          rules: { select: 1, pairedPracticalRequired: true },
          theory: [
            C("NST31022","Cryptography",2,true,{category:"ELECTIVE"}),
            C("CIS31022","Data Mining",2,true,{category:"ELECTIVE"}),
            C("CIS31032","Human Computer Interaction",2,true,{category:"ELECTIVE"})
          ],
          practical: [
            C("NST31051","Practical for Cryptography",1,true,{category:"ELECTIVE_PRACTICAL", pairsWith:"NST31022"}),
            C("CIS31041","Practical for Data Mining",1,true,{category:"ELECTIVE_PRACTICAL", pairsWith:"CIS31022"}),
            C("CIS31051","Practical for Human Computer Interaction",1,true,{category:"ELECTIVE_PRACTICAL", pairsWith:"CIS31032"})
          ]
        }
      ]
    },
    "2": {
      courses: [
        C("CIS32012","Enterprise Architecture and Leadership",2,true),
        C("SWT32011","Mobile Application Development",1,true),
        C("UCT32011","Embedded System",1,true),
        C("NST32012","Wireless Network",2,true),
        C("SWT32022","Service Oriented Web Application",2,true),
        C("NST32042","Information System Security",2,true),
        C("SWT32031","Literature Survey",1,true),
        C("SWT32042","Practical for Mobile Application Development",2,true),
        C("UCT32022","Practical for Embedded System",2,true),
        C("NST32031","Practical for Wireless Network",1,true),
        C("SWT32051","Practical for Service Oriented Web Application",1,true)
      ]
    }
  },
  "4": {
    "1": {
      courses: [
        C("SWT41021","Cloud Application Development",1,true),
        C("SWT41032","Advance Software Engineering",2,true),
        C("CIS41022","Advance Database Management System",2,true),
        C("CMS41012","Professional Practice",2,true),
        C("SWT41042","Practical for Cloud Application Development",2,true),
        C("CIS41032","Practical for Advance Database Management System",2,true),
        C("SWT41051","Practical for Advance Software Engineering",1,true)
      ],
      electiveGroups: [
        {
          id: "Y4S1_ELECTIVE1",
          label: "Elective 1",
          rules: { select: 1 },
          theory: [
            C("NST41032","Risk, Crisis and Security Management",2,true,{category:"ELECTIVE"}),
            C("CIS41012","Data Analytics and Business Intelligence",2,true,{category:"ELECTIVE"})
          ]
        },
        {
          id: "Y4S1_ELECTIVE2",
          label: "Elective 2 (Theory) + Practical",
          rules: { select: 1, pairedPracticalRequired: true },
          theory: [
            C("UCT41011","Industrial Automation and Ladder Programming",1,true,{category:"ELECTIVE"}),
            C("UCT41031","Introduction to Smart Systems",1,true,{category:"ELECTIVE"})
          ],
          practical: [
            C("UCT41022","Practical for Industrial Automation and Ladder Programming",2,true,{category:"ELECTIVE_PRACTICAL", pairsWith:"UCT41011"}),
            C("UCT41042","Practical for Introduction to Smart Systems",2,true,{category:"ELECTIVE_PRACTICAL", pairsWith:"UCT41031"})
          ]
        }
      ]
    },
    "2": {
      courses: [
        C("SWT40016","Final Research and Development Project",6,true),
        C("SWT42016","Industrial Placement",6,false,{category:"NGPA"})
      ]
    }
  }
};

const curriculumNetworkSecurity = {
  "3": {
    "1": {
      courses: [
        C("NST31011","Scaling and Connecting Network",1,true),
        C("NST31022","Cryptography",2,true),
        C("NST31032","Vulnerability assessments and penetration testing-I",2,true),
        C("CMS31022","Research Methodologies for ICT",2,true),
        C("CIS31012","ICT Project management",2,true),
        C("NST31042","Practical for Scaling and Connecting Network",2,true),
        C("NST31051","Practical for Cryptography",1,true),
        C("NST31062","Practical for vulnerability assessments and penetration testing-I",2,true)
      ]
    },
    "2": {
      courses: [
        C("UCT32011","Embedded system",1,true),
        C("SWT32011","Mobile application Development",1,true),
        C("NST32012","Wireless Network",2,true),
        C("CIS32012","Enterprise Architecture and Leadership",2,true),
        C("NST32021","Literature survey",1,true),
        C("UCT32022","Practical for Embedded system",2,true),
        C("SWT32042","Practical for Mobile application Development",2,true),
        C("NST32031","Practical for Wireless Network",1,true)
      ],
      electiveGroups: [
        {
          id: "Y3S2_ELECTIVE1",
          label: "Elective 1",
          rules: { select: 1 },
          theory: [
            C("NST32042","Information Systems security",2,true,{category:"ELECTIVE"}),
            C("NST32052","Information Security Auditing",2,true,{category:"ELECTIVE"})
          ]
        },
        {
          id: "Y3S2_ELECTIVE2",
          label: "Elective 2 (Theory) + Practical",
          rules: { select: 1, pairedPracticalRequired: true },
          theory: [
            C("UCT32031","Cognitive neural networks",1,true,{category:"ELECTIVE"}),
            C("NST32061","Network Planning and Simulation",1,true,{category:"ELECTIVE"})
          ],
          practical: [
            C("UCT32042","Practical for Cognitive neural networks",2,true,{category:"ELECTIVE_PRACTICAL", pairsWith:"UCT32031"}),
            C("NST32072","Practical for Network Planning and Simulation",2,true,{category:"ELECTIVE_PRACTICAL", pairsWith:"NST32061"})
          ]
        }
      ]
    }
  },
  "4": {
    "1": {
      courses: [
        C("UCT41011","Industrial Automation and ladder Programming",1,true),
        C("NST41011","Computer security and forensics",1,true),
        C("NST41021","Vulnerability assessments and penetration testing-II",1,true),
        C("NST41032","Risk, Crisis and Security Management",2,true),
        C("CIS41012","Data Analytics and Business Intelligence",2,true),
        C("CMS41012","Professional Practice",2,true),
        C("UCT41022","Practical for Industrial Automation and ladder Programming",2,true),
        C("NST41062","Practical for Computer security and forensics",2,true),
        C("NST41071","Practical for vulnerability assessments and penetration testing-II",1,true)
      ],
      electiveGroups: [
        {
          id: "Y4S1_ELECTIVE",
          label: "Elective (Theory) + Practical",
          rules: { select: 1, pairedPracticalRequired: true },
          theory: [
            C("UCT41031","Introduction to smart systems",1,true,{category:"ELECTIVE"}),
            C("NST41081","Secure Network Infrastructure",1,true,{category:"ELECTIVE"})
          ],
          practical: [
            C("UCT41042","Practical for Introduction to smart systems",2,true,{category:"ELECTIVE_PRACTICAL", pairsWith:"UCT41031"}),
            C("NST41092","Practical for Secure Network Infrastructure",2,true,{category:"ELECTIVE_PRACTICAL", pairsWith:"NST41081"})
          ]
        }
      ]
    },
    "2": {
      courses: [
        C("NST40046","Final Research and Development Project",6,true),
        C("NST42016","Industrial Placement",6,false,{category:"NGPA"})
      ]
    }
  }
};

/* ====== Storage ====== */
const STORAGE_KEY = "seu-ict-gpa-records-v1";

function loadRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch { return []; }
}

function saveRecords(records) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

/* ====== Curriculum access ====== */
function getSemesterPlan(year, semester, spec) {
  if (year === "1" || year === "2") return (curriculumCommon[year] && curriculumCommon[year][semester]) || { courses: [] };
  if (spec === "Software Technologies") return (curriculumSoftware[year] && curriculumSoftware[year][semester]) || { courses: [] };
  if (spec === "Network & Security Technologies") return (curriculumNetworkSecurity[year] && curriculumNetworkSecurity[year][semester]) || { courses: [] };
  return { courses: [] };
}

function nowISO() {
  return new Date().toISOString();
}

function buildFormCourses(plan, electivePickByGroupId) {
  const base = [...(plan.courses || [])];

  const groups = plan.electiveGroups || [];
  for (const g of groups) {
    const pickedTheory = electivePickByGroupId[g.id];
    if (!pickedTheory) continue;

    const theory = (g.theory || []).find(t => t.code === pickedTheory);
    if (theory) base.push(theory);

    if (g.rules && g.rules.pairedPracticalRequired && g.practical && theory) {
      const pr = g.practical.find(p => p.pairsWith === theory.code);
      if (pr) base.push(pr);
    }
  }

  // de-dup
  const seen = new Set();
  return base.filter(c => (seen.has(c.code) ? false : (seen.add(c.code), true)));
}
/* =========================
   Part 2/2 — UI + GPA logic
   ========================= */

/* ====== DOM ====== */
const $ = (id) => document.getElementById(id);

const el = {
  studentName: $("studentName"),
  regNo: $("regNo"),
  indexNo: $("indexNo"),
  academicYear: $("academicYear"),

  yearSelect: $("yearSelect"),
  semesterSelect: $("semesterSelect"),
  specSelect: $("specSelect"),
  specHint: $("specHint"),

  electivesBox: $("electivesBox"),
  coursesTbody: $("coursesTbody"),

  btnCalc: $("btnCalc"),
  btnSave: $("btnSave"),
  btnPrint: $("btnPrint"),
  btnClearAll: $("btnClearAll"),

  semGpa: $("semGpa"),
  cgpa: $("cgpa"),
  degreeClass: $("degreeClass"),

  savedList: $("savedList"),

  // print area
  pName: $("pName"),
  pReg: $("pReg"),
  pIndex: $("pIndex"),
  pAca: $("pAca"),
  pSel: $("pSel"),
  pSpec: $("pSpec"),
  printTbody: $("printTbody"),
  pSemGpa: $("pSemGpa"),
  pCgpa: $("pCgpa"),
  pClass: $("pClass"),
  pGenerated: $("pGenerated"),
};

/* ====== State ====== */
let records = loadRecords();

let state = {
  year: "1",
  semester: "1",
  spec: "Common",
  electivePick: {}, // groupId -> theoryCode
  grades: {},       // courseCode -> grade
  plan: null,
  formCourses: [],
};

function syncStateFromSelectors() {
  state.year = el.yearSelect.value;
  state.semester = el.semesterSelect.value;

  const canSpec = state.year === "3" || state.year === "4";
  el.specSelect.disabled = !canSpec;

  if (!canSpec) {
    state.spec = "Common";
    el.specSelect.value = "Common";
    el.specHint.style.display = "block";
  } else {
    el.specHint.style.display = "none";
    state.spec = el.specSelect.value;
    if (state.spec === "Common") {
      // force user to choose a specialization in year 3/4
      state.spec = "Software Technologies";
      el.specSelect.value = state.spec;
    }
  }

  state.plan = getSemesterPlan(state.year, state.semester, state.spec);
}

/* ====== Validation ====== */
function validateInputs() {
  const errors = [];

  const name = el.studentName.value.trim();
  const reg = el.regNo.value.trim();
  const idx = el.indexNo.value.trim();
  const aca = el.academicYear.value.trim();

  if (!name) errors.push("Student Name is required.");
  if (!reg) errors.push("Registration No is required.");
  if (!idx) errors.push("Index No is required.");
  if (!aca) errors.push("Academic Year is required.");

  // electives required
  const groups = (state.plan && state.plan.electiveGroups) ? state.plan.electiveGroups : [];
  for (const g of groups) {
    if (!state.electivePick[g.id]) {
      errors.push(`Please select ${g.label}.`);
    }
  }

  // grades required for GPA courses in the built form list
  for (const c of state.formCourses) {
    if (!c.countsForGPA) continue;
    const g = state.grades[c.code];
    if (!g) errors.push(`Grade is required for ${c.code} - ${c.title}.`);
  }

  return errors;
}

/* ====== GPA ====== */
function calcSemesterGPAFromFormCourses(formCourses, gradesByCode) {
  let credits = 0;
  let q = 0;
  for (const c of formCourses) {
    if (!c.countsForGPA) continue;
    const gr = gradesByCode[c.code];
    if (!gr) continue;
    credits += c.credits;
    q += c.credits * (GRADE_POINTS[gr] ?? 0);
  }
  const gpa = credits > 0 ? q / credits : 0;
  return { credits, qualityPoints: q, gpa: round2(gpa) };
}

// CGPA with best grade per course code across all saved records
function calcCGPAFromRecords(recs) {
  const bestByCode = new Map(); // code -> {credits, gp}
  for (const r of recs) {
    for (const c of (r.courses || [])) {
      if (!c.countsForGPA) continue;
      if (!c.grade) continue;

      const gp = GRADE_POINTS[c.grade] ?? 0;
      const prev = bestByCode.get(c.code);
      if (!prev || gp > prev.gp) {
        bestByCode.set(c.code, { credits: c.credits, gp });
      }
    }
  }

  let totalCredits = 0;
  let totalQ = 0;
  for (const v of bestByCode.values()) {
    totalCredits += v.credits;
    totalQ += v.credits * v.gp;
  }
  const cgpa = totalCredits > 0 ? totalQ / totalCredits : 0;
  return { totalCredits, totalQ, cgpa: round2(cgpa) };
}

/* ====== Rendering ====== */
function renderElectivesUI() {
  const groups = (state.plan && state.plan.electiveGroups) ? state.plan.electiveGroups : [];
  if (!groups.length) {
    el.electivesBox.classList.add("hidden");
    el.electivesBox.innerHTML = "";
    return;
  }

  el.electivesBox.classList.remove("hidden");

  const html = [
    `<h3 style="margin:0 0 8px;font-size:14px;">Electives (Required)</h3>`,
    ...groups.map(g => {
      const options = (g.theory || []).map(t => {
        const sel = (state.electivePick[g.id] === t.code) ? "selected" : "";
        return `<option value="${t.code}" ${sel}>${t.code} — ${t.title} (${t.credits})</option>`;
      }).join("");

      const hint = (g.rules && g.rules.pairedPracticalRequired && state.electivePick[g.id])
        ? `<div class="hint">Matching practical will be included automatically.</div>`
        : "";

      return `
        <label style="display:grid;gap:6px;margin-top:8px;">
          <span style="color:var(--muted);font-size:13px;">${g.label}</span>
          <select data-group="${g.id}">
            <option value="">-- Select --</option>
            ${options}
          </select>
          ${hint}
        </label>
      `;
    })
  ].join("");

  el.electivesBox.innerHTML = html;

  // Attach change handlers
  el.electivesBox.querySelectorAll("select[data-group]").forEach(sel => {
    sel.addEventListener("change", (e) => {
      const groupId = e.target.getAttribute("data-group");
      const code = e.target.value;
      if (!code) delete state.electivePick[groupId];
      else state.electivePick[groupId] = code;

      rebuildAndRenderCourses();
    });
  });
}

function gradeSelectHTML(courseCode, disabled) {
  if (disabled) return `<span class="muted">N/A</span>`;

  const current = state.grades[courseCode] || "";
  const opts = [`<option value="">--</option>`]
    .concat(GRADES.map(g => `<option value="${g}" ${current === g ? "selected" : ""}>${g}</option>`))
    .join("");

  return `<select data-grade="${courseCode}" class="gradeSelect">${opts}</select>`;
}

function renderCoursesTable() {
  el.coursesTbody.innerHTML = state.formCourses.map(c => {
    const isGpa = !!c.countsForGPA;
    const grade = state.grades[c.code] || "";
    const gp = grade ? (GRADE_POINTS[grade] ?? "") : "";

    return `
      <tr>
        <td><code>${c.code}</code></td>
        <td>${c.title}</td>
        <td class="right">${c.credits}</td>
        <td class="center">${isGpa ? "GPA" : "NGPA"}</td>
        <td class="center">${gradeSelectHTML(c.code, !isGpa)}</td>
        <td class="right">${gp !== "" ? Number(gp).toFixed(2) : ""}</td>
      </tr>
    `;
  }).join("");

  // bind grade dropdown changes
  el.coursesTbody.querySelectorAll("select[data-grade]").forEach(sel => {
    sel.addEventListener("change", (e) => {
      const code = e.target.getAttribute("data-grade");
      const val = e.target.value;
      if (!val) delete state.grades[code];
      else state.grades[code] = val;
      // live update grade points column + summary if already calculated
      renderCoursesTable(); // simple re-render
    });
  });
}

function renderSavedRecords() {
  if (!records.length) {
    el.savedList.innerHTML = `<div class="muted">No saved records yet.</div>`;
    return;
  }

  const items = records.map(r => {
    const sem = calcSemesterGPAFromFormCourses(r.courses || [], Object.fromEntries((r.courses || []).map(c => [c.code, c.grade || ""])));
    const created = new Date(r.createdAtISO).toLocaleString();
    return `
      <div class="savedItem">
        <div><b>${escapeHtml(r.student?.regNo || "")}</b> — Y${r.year} S${r.semester} — ${escapeHtml(r.specialization || "")}</div>
        <div class="meta">Saved: ${created}</div>
        <div class="meta">Semester GPA: <b>${sem.gpa.toFixed(2)}</b></div>
        <div class="actionsRow">
          <button class="btn outline small" data-del="${r.id}">Delete</button>
        </div>
      </div>
    `;
  }).join("");

  el.savedList.innerHTML = items;

  el.savedList.querySelectorAll("button[data-del]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-del");
      if (!confirm("Delete this saved semester record?")) return;
      records = records.filter(x => x.id !== id);
      saveRecords(records);
      updateCgpaAndClass();
      renderSavedRecords();
    });
  });
}

function rebuildAndRenderCourses() {
  // Build form courses including electives
  state.formCourses = buildFormCourses(state.plan || { courses: [] }, state.electivePick);

  // Remove grades for courses not in current table (avoid stale)
  const codes = new Set(state.formCourses.map(c => c.code));
  for (const k of Object.keys(state.grades)) {
    if (!codes.has(k)) delete state.grades[k];
  }

  renderElectivesUI();
  renderCoursesTable();
}

/* ====== Print report ====== */
function updatePrintArea(semesterStats, cgpaStats, degreeClass) {
  const sName = el.studentName.value.trim() || "—";
  const reg = el.regNo.value.trim() || "—";
  const idx = el.indexNo.value.trim() || "—";
  const aca = el.academicYear.value.trim() || "—";

  el.pName.textContent = sName;
  el.pReg.textContent = reg;
  el.pIndex.textContent = idx;
  el.pAca.textContent = aca;
  el.pSel.textContent = `Year ${state.year}, Semester ${state.semester}`;
  el.pSpec.textContent = state.spec;

  // print table rows
  el.printTbody.innerHTML = state.formCourses.map(c => {
    const grade = c.countsForGPA ? (state.grades[c.code] || "—") : "—";
    const gp = (grade !== "—") ? (GRADE_POINTS[grade] ?? "—") : "—";
    return `
      <tr>
        <td><code>${c.code}</code></td>
        <td>${c.title}</td>
        <td class="right">${c.credits}</td>
        <td class="center">${c.countsForGPA ? "GPA" : "NGPA"}</td>
        <td class="center">${grade}</td>
        <td class="right">${gp !== "—" ? Number(gp).toFixed(2) : "—"}</td>
      </tr>
    `;
  }).join("");

  el.pSemGpa.textContent = semesterStats.gpa.toFixed(2);
  el.pCgpa.textContent = cgpaStats.cgpa.toFixed(2);
  el.pClass.textContent = degreeClass;
  el.pGenerated.textContent = new Date().toLocaleString();
}

/* ====== Actions ====== */
function updateCgpaAndClass() {
  const cgpaStats = calcCGPAFromRecords(records);
  el.cgpa.textContent = cgpaStats.cgpa.toFixed(2);
  el.degreeClass.textContent = classifyDegreeByGPA(cgpaStats.cgpa);
  return cgpaStats;
}

function handleCalculate() {
  const errors = validateInputs();
  if (errors.length) {
    alert(errors.join("\n"));
    return;
  }

  const semStats = calcSemesterGPAFromFormCourses(state.formCourses, state.grades);
  el.semGpa.textContent = semStats.gpa.toFixed(2);

  const cgpaStats = updateCgpaAndClass();
  const degClass = classifyDegreeByGPA(cgpaStats.cgpa);

  updatePrintArea(semStats, cgpaStats, degClass);
}

function handleSave() {
  const errors = validateInputs();
  if (errors.length) {
    alert(errors.join("\n"));
    return;
  }

  const student = {
    name: el.studentName.value.trim(),
    regNo: el.regNo.value.trim(),
    indexNo: el.indexNo.value.trim(),
    academicYear: el.academicYear.value.trim(),
  };

  const savedCourses = state.formCourses.map(c => ({
    code: c.code,
    title: c.title,
    credits: c.credits,
    countsForGPA: c.countsForGPA,
    category: c.category,
    grade: c.countsForGPA ? (state.grades[c.code] || undefined) : undefined
  }));

  const rec = {
    id: (crypto && crypto.randomUUID) ? crypto.randomUUID() : String(Date.now()),
    createdAtISO: nowISO(),
    year: state.year,
    semester: state.semester,
    specialization: state.spec,
    student,
    courses: savedCourses
  };

  records = [rec, ...records];
  saveRecords(records);

  renderSavedRecords();
  const cgpaStats = updateCgpaAndClass();
  alert("Saved successfully.");

  // also refresh print with new CGPA
  const semStats = calcSemesterGPAFromFormCourses(state.formCourses, state.grades);
  const degClass = classifyDegreeByGPA(cgpaStats.cgpa);
  updatePrintArea(semStats, cgpaStats, degClass);
}

function handlePrint() {
  const errors = validateInputs();
  if (errors.length) {
    alert(errors.join("\n"));
    return;
  }
  // Ensure print area is updated
  const semStats = calcSemesterGPAFromFormCourses(state.formCourses, state.grades);
  const cgpaStats = updateCgpaAndClass();
  const degClass = classifyDegreeByGPA(cgpaStats.cgpa);
  updatePrintArea(semStats, cgpaStats, degClass);

  window.print();
}

function handleClearAll() {
  if (!records.length) return;
  if (!confirm("This will remove ALL saved records from this browser. Continue?")) return;
  localStorage.removeItem(STORAGE_KEY);
  records = [];
  renderSavedRecords();
  el.cgpa.textContent = "0.00";
  el.degreeClass.textContent = "—";
}

/* ====== Helpers ====== */
function escapeHtml(str) {
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll("\"","&quot;")
    .replaceAll("'","&#039;");
}

/* ====== Init ====== */
function init() {
  // selectors
  el.yearSelect.addEventListener("change", () => {
    // reset elective picks & grades when changing plan
    state.electivePick = {};
    state.grades = {};
    syncStateFromSelectors();
    rebuildAndRenderCourses();
    el.semGpa.textContent = "0.00";
  });

  el.semesterSelect.addEventListener("change", () => {
    state.electivePick = {};
    state.grades = {};
    syncStateFromSelectors();
    rebuildAndRenderCourses();
    el.semGpa.textContent = "0.00";
  });

  el.specSelect.addEventListener("change", () => {
    state.electivePick = {};
    state.grades = {};
    syncStateFromSelectors();
    rebuildAndRenderCourses();
    el.semGpa.textContent = "0.00";
  });

  el.btnCalc.addEventListener("click", handleCalculate);
  el.btnSave.addEventListener("click", handleSave);
  el.btnPrint.addEventListener("click", handlePrint);
  el.btnClearAll.addEventListener("click", handleClearAll);

  // initial
  syncStateFromSelectors();
  rebuildAndRenderCourses();
  renderSavedRecords();
  updateCgpaAndClass();

  // initial print area defaults
  updatePrintArea(
    { gpa: 0 },
    { cgpa: (calcCGPAFromRecords(records).cgpa || 0) },
    classifyDegreeByGPA(calcCGPAFromRecords(records).cgpa || 0)
  );
}

init();