/* Roshan Shah Thakuri — portfolio
   All editable content lives in the DATA object below. */
(function () {
  "use strict";

  var GITHUB = "https://github.com/roshanshahthakuri57";
  var EMAIL = "kxah02@gmail.com";

  var DATA = {
    projects: [
      {
        id: "soc-lab",
        title: "SOC Detection Lab",
        tagline: "Virtual SIEM with Wazuh & Suricata IDS",
        category: "Defensive",
        year: "2025",
        role: "Lab Project",
        image: "assets/images/soc-lab.jpg",
        summary: "A virtual security monitoring lab configured to detect brute-force attacks and network anomalies using Wazuh SIEM and Suricata.",
        points: [
          "Configured Wazuh Manager and agents across virtual machines.",
          "Tested SSH and web brute-force detection rules.",
          "Mapped alerts to the MITRE ATT&CK framework."
        ],
        metrics: [["SIEM", "Wazuh"], ["IDS", "Suricata"]],
        stack: ["Wazuh", "Suricata", "Linux", "Sysmon"]
      },
      {
        id: "web-pentest",
        title: "Web Security Audit",
        tagline: "Testing OWASP Top 10 vulnerabilities",
        category: "Offensive",
        year: "2024",
        role: "Audit Lab",
        image: "assets/images/web-audit.jpg",
        summary: "Hands-on vulnerability testing on lab applications covering SQL injection, XSS and broken access controls.",
        points: [
          "Targeted discovery using Burp Suite and OWASP ZAP.",
          "Demonstrated proof-of-concept exploits in a sandbox.",
          "Wrote concise remediation notes for identified flaws."
        ],
        metrics: [["Standard", "OWASP Top 10"], ["Tool", "Burp Suite"]],
        stack: ["Burp Suite", "OWASP ZAP", "Python", "Kali Linux"]
      },
      {
        id: "network-scanner",
        title: "Python Network Scanner",
        tagline: "Multithreaded port scanner & CVE lookup",
        category: "Tooling",
        year: "2024",
        role: "Developer",
        image: "assets/images/packet-forensics.jpg",
        summary: "A lightweight multithreaded network utility written in Python for service discovery and CVE lookups.",
        points: [
          "TCP connect and SYN probe scanner.",
          "Banner grabbing for service versions.",
          "Automatic lookup against public CVE data."
        ],
        metrics: [["Language", "Python 3"], ["Speed", "Multithreaded"]],
        stack: ["Python", "Sockets", "NVD API", "Linux"]
      },
      {
        id: "packet-analysis",
        title: "Traffic & PCAP Forensics",
        tagline: "Network traffic inspection with Wireshark",
        category: "Forensics",
        year: "2024",
        role: "Forensics Lab",
        image: "assets/images/packet-forensics.jpg",
        summary: "Investigating packet captures in Wireshark to identify suspicious connections, DNS queries and beacons.",
        points: [
          "Extracted and filtered protocol traffic streams.",
          "Identified anomalous outbound requests.",
          "Documented packet findings in a lab write-up."
        ],
        metrics: [["Inspection", "Wireshark"], ["Scope", "PCAP forensics"]],
        stack: ["Wireshark", "Tshark", "NetworkMiner", "Linux"]
      }
    ],

    timeline: [
      {
        when: "2024 — Present",
        title: "Cybersecurity Club Member / CTF Player",
        org: "University Information Security Society, Kathmandu",
        text: "Participating in collegiate CTFs, practising web exploitation and privilege escalation, and sharing security notes with peers.",
        tech: ["Kali Linux", "Burp Suite", "Wireshark", "TryHackMe"]
      },
      {
        when: "2023 — 2024",
        title: "IT & Lab Assistant",
        org: "Academic Computer Lab, Kathmandu",
        text: "Assisted with workstation maintenance, basic network setup and software updates across computer labs.",
        tech: ["Linux", "Windows", "Networking", "Bash"]
      },
      {
        when: "2023 — Present",
        title: "B.Sc. Cybersecurity",
        org: "University Institute",
        text: "Undergraduate student."
      }
    ],

    certs: [
      {
        name: "CompTIA Security+",
        issuer: "CompTIA · SY0-701",
        status: "In Progress",
        text: "Global benchmark credential establishing core knowledge required for cybersecurity analyst roles.",
        skills: ["Threats & Attacks", "Security Architecture", "Incident Response", "Cryptography", "Identity & Access"]
      },
      {
        name: "Google Cybersecurity Professional Certificate",
        issuer: "Google · Coursera",
        status: "Completed",
        text: "Eight-course series covering foundational security, network protection, Python automation and triage.",
        skills: ["Linux & SQL", "Python Automation", "SIEM", "IDS/IPS", "Incident Playbooks"]
      },
      {
        name: "TryHackMe Cyber Defense Certificate",
        issuer: "TryHackMe",
        status: "Completed",
        text: "Hands-on learning path spanning practical blue-team labs, packet investigation and event log forensics.",
        skills: ["Wireshark", "Splunk", "Endpoint Forensics", "Network Security", "Phishing Analysis"]
      },
      {
        name: "Junior Penetration Tester (eJPT)",
        issuer: "INE Security · eJPTv2",
        status: "In Progress",
        text: "Practical assessment evaluating hands-on penetration testing and offensive security methodology.",
        skills: ["Nmap", "Metasploit", "Vulnerability Assessment", "Routing & Pivoting", "Web App Exploitation"]
      },
      {
        name: "Cisco Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        status: "Completed",
        text: "Foundational training covering network security fundamentals and organisational risk management.",
        skills: ["Network Defense", "Threat Vectors", "CIA Triad", "Firewalls"]
      }
    ],

    skills: [
      { title: "Security & Tools", items: ["Burp Suite", "Wireshark", "Nmap", "Metasploit", "Wazuh SIEM", "OWASP ZAP", "Hashcat"] },
      { title: "Systems & Networking", items: ["Kali Linux", "Ubuntu", "Windows Server", "TCP/IP Protocols", "DNS / HTTP", "Firewalls"] },
      { title: "Languages & Scripting", items: ["Python 3", "Bash Scripting", "SQL", "Git", "PowerShell", "Markdown"] }
    ]
  };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var chips = function (arr) {
    return '<ul class="chips">' + arr.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
  };

  document.documentElement.classList.add("js");
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Render ---------- */
  $("#tiles").innerHTML = DATA.projects.map(function (p) {
    return '<button class="tile reveal" type="button" data-open="' + p.id + '">' +
      '<span class="img"><img src="' + p.image + '" alt="" loading="lazy" /></span>' +
      '<span class="txt"><span class="cat">' + esc(p.category) + " · " + esc(p.year) + "</span>" +
      "<h3>" + esc(p.title) + "</h3><p>" + esc(p.tagline) + '</p><span class="more">Discover</span></span></button>';
  }).join("");

  $("#timeline").innerHTML = DATA.timeline.map(function (t) {
    return '<li class="reveal"><span class="when">' + esc(t.when) + "</span><h3>" + esc(t.title) + '</h3><div class="org">' + esc(t.org) + "</div>" +
      "<p>" + esc(t.text) + "</p>" + (t.tech ? chips(t.tech) : "") + "</li>";
  }).join("");

  $("#accordion").innerHTML = DATA.certs.map(function (c) {
    var prog = c.status === "In Progress";
    return '<details class="acc reveal"><summary><span class="t">' + esc(c.name) +
      '<span class="s">' + esc(c.issuer) + '</span></span><span class="pm" aria-hidden="true"></span></summary>' +
      '<div class="panel"><p><span class="badge' + (prog ? " progress" : "") + '">' + esc(c.status) + "</span></p><p>" + esc(c.text) + "</p>" + chips(c.skills) + "</div></details>";
  }).join("");

  $("#skills").innerHTML = DATA.skills.map(function (s) {
    return '<div class="skill reveal"><h3>' + esc(s.title) + "</h3><ul>" +
      s.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div>";
  }).join("");

  /* ---------- Header + menu ---------- */
  var header = $("#header"), menuBtn = $("#menuBtn"), menu = $("#menu");
  var onScroll = function () { header.classList.toggle("is-stuck", window.scrollY > 40); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-hidden", String(!open));
    menuBtn.querySelector(".menu-label").textContent = open ? "Close" : "Menu";
    if (open) { $("a", menu).focus({ preventScroll: true }); }
  }
  menuBtn.addEventListener("click", function () { setMenu(!document.body.classList.contains("menu-open")); });
  $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) { setMenu(false); menuBtn.focus(); }
  });

  /* ---------- Hero slides ---------- */
  var slides = $$(".slide"), dots = $$("#dots button"), cur = 0, timer = null;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function show(i) {
    cur = (i + slides.length) % slides.length;
    slides.forEach(function (s, n) { s.classList.toggle("is-active", n === cur); s.setAttribute("aria-hidden", String(n !== cur)); });
    dots.forEach(function (d, n) { d.classList.remove("is-active"); d.setAttribute("aria-selected", String(n === cur)); });
    void dots[cur].offsetWidth; // restart progress line
    dots[cur].classList.add("is-active");
  }
  function play() { if (reduce) return; clearInterval(timer); timer = setInterval(function () { show(cur + 1); }, 6000); }
  dots.forEach(function (d, n) { d.addEventListener("click", function () { show(n); play(); }); });
  var hero = $(".hero");
  hero.addEventListener("mouseenter", function () { clearInterval(timer); });
  hero.addEventListener("mouseleave", play);
  show(0); play();

  /* ---------- Project dialog ---------- */
  var dialog = $("#dialog"), dBody = $("#dBody"), lastFocus = null;
  function openProject(id) {
    var p = DATA.projects.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    lastFocus = document.activeElement;
    dBody.innerHTML =
      '<div class="d-img"><img src="' + p.image + '" alt="" /></div><div class="d-main">' +
      '<p class="eyebrow">' + esc(p.category) + "</p><h2 id=\"dTitle\">" + esc(p.title) + "</h2>" +
      '<p class="d-tag">' + esc(p.tagline) + "</p>" +
      '<dl class="d-meta"><div><dt>Year</dt><dd>' + esc(p.year) + "</dd></div><div><dt>Role</dt><dd>" + esc(p.role) + "</dd></div>" +
      p.metrics.map(function (m) { return "<div><dt>" + esc(m[0]) + "</dt><dd>" + esc(m[1]) + "</dd></div>"; }).join("") + "</dl>" +
      "<h4>Overview</h4><p>" + esc(p.summary) + "</p>" +
      "<h4>What I did</h4><ul class=\"points\">" + p.points.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
      "<h4>Stack</h4>" + chips(p.stack) +
      '<div class="d-cta"><a class="btn" href="' + GITHUB + '" target="_blank" rel="noopener">GitHub profile</a>' +
      '<a class="btn" href="mailto:' + EMAIL + "?subject=" + encodeURIComponent("Project inquiry: " + p.title) + '">Discuss this project</a></div></div>';
    if (typeof dialog.showModal === "function") dialog.showModal(); else dialog.setAttribute("open", "");
    dialog.scrollTop = 0;
  }
  function closeProject() {
    if (typeof dialog.close === "function") dialog.close(); else dialog.removeAttribute("open");
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }
  $("#dClose").addEventListener("click", closeProject);
  dialog.addEventListener("click", function (e) { if (e.target === dialog) closeProject(); });
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-open]");
    if (!t) return;
    e.preventDefault();
    openProject(t.getAttribute("data-open"));
  });

  /* ---------- Reveal on scroll ---------- */
  var reveals = $$(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Contact form → mailto ---------- */
  var form = $("#contactForm"), note = $("#formNote");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var name = String(d.get("name") || "").trim(), mail = String(d.get("email") || "").trim(), msg = String(d.get("message") || "").trim();
    if (!name || !msg || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      note.textContent = "Please fill in your name, a valid email address and a message.";
      note.classList.add("err");
      return;
    }
    note.classList.remove("err");
    note.textContent = "Opening your email app…";
    var body = msg + "\n\n— " + name + " (" + mail + ")";
    window.location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Portfolio message from " + name) + "&body=" + encodeURIComponent(body);
  });
})();
