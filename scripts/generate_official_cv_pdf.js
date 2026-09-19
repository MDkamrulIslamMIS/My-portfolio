import fs from 'fs';
import { jsPDF } from 'jspdf';

async function generateCV() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Base64 of image
  const imgBase64 = fs.readFileSync('public/kamrul.jpg').toString('base64');
  const imgData = `data:image/jpeg;base64,${imgBase64}`;

  const leftColX = 15;
  const leftColWidth = 66;
  const dividerX = 86;
  const rightColX = 92;
  const rightColWidth = 103;

  function drawHeader() {
    // Header title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(20, 20, 20);
    doc.text('MD. KAMRUL ISLAM', leftColX, 26);

    // Profile photo top right
    doc.addImage(imgData, 'JPEG', 162, 10, 32, 38);

    // Subtle line beneath header
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.4);
    doc.line(leftColX, 48, 195, 48);

    // Vertical divider line between left and right column
    doc.setDrawColor(80, 80, 80);
    doc.setLineWidth(0.4);
    doc.line(dividerX, 52, dividerX, 285);
  }

  function sectionTitle(title, x, y, width) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(title, x, y);

    // Underline
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.5);
    const textW = doc.getTextWidth(title);
    doc.line(x, y + 1.2, x + textW, y + 1.2);
    return y + 6;
  }

  // ================= PAGE 1 =================
  drawHeader();

  // LEFT COLUMN - PAGE 1
  let yLeft = 57;

  // 1. CONTACT
  yLeft = sectionTitle('CONTACT', leftColX, yLeft, leftColWidth);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);

  const contacts = [
    { icon: '+8801810811417', label: '+8801810811417' },
    { icon: 'mdkamrulislamnakir@gmail.com', label: 'mdkamrulislamnakir@gmail.com' },
    { icon: 'Chouhali, Sirajganj, Bangladesh', label: 'Chouhali, Sirajganj, Bangladesh' },
    { icon: 'www.linkedin.com/in/md-kamrul-islam1997', label: 'www.linkedin.com/in/md-kamrul-islam1997' }
  ];

  contacts.forEach(c => {
    const lines = doc.splitTextToSize(c.label, leftColWidth);
    doc.text(lines, leftColX, yLeft);
    yLeft += lines.length * 4.2;
  });
  yLeft += 4;

  // 2. SOFTWARE SKILLS
  yLeft = sectionTitle('SOFTWARE SKILLS', leftColX, yLeft, leftColWidth);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(40, 40, 40);
  const swSkills = doc.splitTextToSize(
    'ERP Logic, VS code, Figma, Photoshop, Filmora, Audacity, Blender, MS word/excel/ Microsoft PowerPoint/ Microsoft Outlook, Notepad++,',
    leftColWidth
  );
  doc.text(swSkills, leftColX, yLeft);
  yLeft += swSkills.length * 4.2 + 4;

  // 3. PROGRAMING SKILLS
  yLeft = sectionTitle('PROGRAMING SKILLS', leftColX, yLeft, leftColWidth);
  const progSkills = doc.splitTextToSize(
    'Visual Basic, CSS, Bootstrap, JavaScript, PHP, C++, Java Basic, MySQL, Oracle.',
    leftColWidth
  );
  doc.text(progSkills, leftColX, yLeft);
  yLeft += progSkills.length * 4.2 + 4;

  // 4. NETWORKING SKILLS
  yLeft = sectionTitle('NETWORKING SKILLS', leftColX, yLeft, leftColWidth);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Networking & Operating Systems Skills:', leftColX, yLeft);
  yLeft += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  const netBullets = [
    'Cisco Packet Tracer Simulation & Troubleshooting,',
    'Network Configuration (Routers, Switches, Firewalls)',
    'TCP/IP, Subletting, VLANs, and Routing Protocols (OSPF, EIGRP, BGP),',
    'Wireless Networking & Security,',
    'Windows & Linux Server Administration,',
    'Cloud Networking'
  ];

  netBullets.forEach(b => {
    const lines = doc.splitTextToSize(`> ${b}`, leftColWidth);
    doc.text(lines, leftColX, yLeft);
    yLeft += lines.length * 3.8;
  });
  yLeft += 4;

  // 5. LANGUAGE
  yLeft = sectionTitle('LANGUAGE', leftColX, yLeft, leftColWidth);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Bengali: ', leftColX, yLeft);
  doc.setFont('helvetica', 'normal');
  doc.text('Native', leftColX + doc.getTextWidth('Bengali: '), yLeft);
  yLeft += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.text('English: ', leftColX, yLeft);
  doc.setFont('helvetica', 'normal');
  doc.text('Bilingual', leftColX + doc.getTextWidth('English: '), yLeft);
  yLeft += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.text('Hindi: ', leftColX, yLeft);
  doc.setFont('helvetica', 'normal');
  doc.text('Fluent', leftColX + doc.getTextWidth('Hindi: '), yLeft);


  // RIGHT COLUMN - PAGE 1
  let yRight = 57;

  // 1. CAREER OBJECTIVE
  yRight = sectionTitle('CAREER OBJECTIVE', rightColX, yRight, rightColWidth);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(40, 40, 40);
  const objectiveLines = doc.splitTextToSize(
    'To contribute to organizational success by leveraging my MIS & IT expertise, analytical skills, and technology-driven approach to improve business processes, optimize decision-making, and drive operational excellence',
    rightColWidth
  );
  doc.text(objectiveLines, rightColX, yRight);
  yRight += objectiveLines.length * 4.2 + 5;

  // 2. CAREER SUMNARY
  yRight = sectionTitle('CAREER SUMNARY', rightColX, yRight, rightColWidth);
  const summaryLines = doc.splitTextToSize(
    'Assistant Officer (ERP & MIS) with hands-on experience in ERP operations, MIS reporting, data analysis, and business process support. Skilled in preparing management reports, maintaining data accuracy, and utilizing information systems to support decision-making and operational efficiency. Eager to enhance technical expertise and contribute to organizational growth through effective information management.',
    rightColWidth
  );
  doc.text(summaryLines, rightColX, yRight);
  yRight += summaryLines.length * 4.2 + 6;

  // 3. WORK EXPERIENCE
  yRight = sectionTitle('WORK EXPERIENCE', rightColX, yRight, rightColWidth);

  // Job 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(0, 0, 0);
  doc.text('Assistant Officer (ERP & MIS)', rightColX, yRight);
  yRight += 4.2;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 30, 30);
  doc.text('Jann Composite Mills Ltd', rightColX, yRight);
  doc.setFont('helvetica', 'normal');
  doc.text(' | May 2025 – Present', rightColX + doc.getTextWidth('Jann Composite Mills Ltd'), yRight);
  yRight += 4;

  const job1Bullets = [
    'Generate and maintain ARM & PIS reports',
    'Prepare daily, weekly, and monthly MIS reports',
    'Manage ERP-related operational data',
    'Analyze production and inventory information',
    'Ensure accurate reporting and documentation using Microsoft Excel'
  ];
  job1Bullets.forEach(b => {
    const lines = doc.splitTextToSize(`>  ${b}`, rightColWidth);
    doc.text(lines, rightColX, yRight);
    yRight += lines.length * 3.8;
  });
  yRight += 4;

  // Job 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(0, 0, 0);
  doc.text('Computer Trainer & Computer Operator', rightColX, yRight);
  yRight += 4.2;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 30, 30);
  doc.text('Labbib Computer Training Center', rightColX, yRight);
  doc.setFont('helvetica', 'normal');
  doc.text(' | 2016 – 2019', rightColX + doc.getTextWidth('Labbib Computer Training Center'), yRight);
  yRight += 4;

  const job2Bullets = [
    'Conducted computer training courses for students.',
    'Taught Microsoft Office (Word, Excel, and PowerPoint) and basic computer operations.',
    'Assisted students with practical computer applications.',
    'Performed software installation, troubleshooting, and computer maintenance.'
  ];
  job2Bullets.forEach(b => {
    const lines = doc.splitTextToSize(`>  ${b}`, rightColWidth);
    doc.text(lines, rightColX, yRight);
    yRight += lines.length * 3.8;
  });
  yRight += 4;

  // Job 3
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(0, 0, 0);
  doc.text('Graphic Designer', rightColX, yRight);
  yRight += 4.2;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 30, 30);
  doc.text('Alpona Graphics Design', rightColX, yRight);
  doc.setFont('helvetica', 'normal');
  doc.text(' | 2019 – 2025', rightColX + doc.getTextWidth('Alpona Graphics Design'), yRight);
  yRight += 4;

  const job3Bullets = [
    'Designed banners, posters, visiting cards,',
    'Created and edited graphics using Adobe Photoshop.',
    'Worked with clients to develop designs according to their requirements.',
    'Prepared print-ready design files and ensured quality output.'
  ];
  job3Bullets.forEach(b => {
    const lines = doc.splitTextToSize(`>  ${b}`, rightColWidth);
    doc.text(lines, rightColX, yRight);
    yRight += lines.length * 3.8;
  });


  // ================= PAGE 2 =================
  doc.addPage();
  drawHeader();

  // LEFT COLUMN - PAGE 2
  yLeft = 57;

  // 1. EDUCATION
  yLeft = sectionTitle('EDUCATION', leftColX, yLeft, leftColWidth);

  // SSC
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Secondary School Certificate (SSC)', leftColX, yLeft);
  yLeft += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  const sscLines = doc.splitTextToSize('R.P.N Shohid Shajahan Kabir High School.', leftColWidth);
  doc.text(sscLines, leftColX, yLeft);
  yLeft += sscLines.length * 3.8;
  doc.text('Group: Science', leftColX, yLeft);
  yLeft += 3.8;
  doc.text('Passing Year: 2015 (GPA: 3.06)', leftColX, yLeft);
  yLeft += 6;

  // HSC
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Higher Secondary Certificate (HSC)', leftColX, yLeft);
  yLeft += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  const hscLines = doc.splitTextToSize('Nagorpur Government College Tangail', leftColWidth);
  doc.text(hscLines, leftColX, yLeft);
  yLeft += hscLines.length * 3.8;
  doc.text('Group: Humanities', leftColX, yLeft);
  yLeft += 3.8;
  doc.text('Year of completion: 2020 (GPA: 3.00)', leftColX, yLeft);
  yLeft += 6;

  // MIS
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Management Information Systems (MIS)', leftColX, yLeft);
  yLeft += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  const misLines = doc.splitTextToSize('Khwaja Yunus Ali University, Sirajganj', leftColWidth);
  doc.text(misLines, leftColX, yLeft);
  yLeft += misLines.length * 3.8;
  doc.text('Session: 2021–2025', leftColX, yLeft);
  yLeft += 3.8;
  const vivaLines = doc.splitTextToSize('Completed 4-Year Program; Final Viva Pending', leftColWidth);
  doc.text(vivaLines, leftColX, yLeft);
  yLeft += vivaLines.length * 3.8;
  doc.setFont('helvetica', 'bold');
  doc.text('Current CGPA: 3.50/4.00', leftColX, yLeft);
  yLeft += 10;

  // 2. REFERENCE
  yLeft = sectionTitle('REFERENCE', leftColX, yLeft, leftColWidth);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Reference: 01', leftColX, yLeft);
  yLeft += 4.5;
  doc.text('Md. Abu Bakkar Hossain', leftColX, yLeft);
  yLeft += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('JANN Composite Mills Ltd.', leftColX, yLeft);
  yLeft += 3.8;
  doc.text('Senior Executive ERP & IT', leftColX, yLeft);
  yLeft += 3.8;
  doc.text('Phone: 01737054008', leftColX, yLeft);
  yLeft += 3.8;
  doc.text('Gmail: abubakkarhossain1@gmail.com', leftColX, yLeft);
  yLeft += 14;

  // Signature drawing in script style
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(10);
  doc.setTextColor(30, 60, 150);
  doc.text('Md. Kamrul Islam', leftColX + 4, yLeft);
  doc.setDrawColor(30, 60, 150);
  doc.setLineWidth(0.3);
  doc.line(leftColX + 2, yLeft + 1, leftColX + 38, yLeft + 1);
  yLeft += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(0, 0, 0);
  doc.text('(Md. Kamrul Islam)', leftColX + 2, yLeft);


  // RIGHT COLUMN - PAGE 2
  yRight = 57;

  // 1. EXTRACURRICULR ACTIVITIES
  yRight = sectionTitle('EXTRACURRICULR ACTIVITIES', rightColX, yRight, rightColWidth);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(40, 40, 40);
  const extraLines = doc.splitTextToSize(
    'Traveling, Cooking, Computer Training Instructor,\nGraphic Design and Banner Creation, Volunteer Activities.',
    rightColWidth
  );
  doc.text(extraLines, rightColX, yRight);
  yRight += extraLines.length * 4.2 + 6;

  // 2. VOLUNTEERING & SOCIAL WORK
  yRight = sectionTitle('VOLUNTEERING & SOCIAL WORK', rightColX, yRight, rightColWidth);

  const volItems = [
    { title: 'Blood Donation Campaign Participant– ', desc: 'Took part in university and community blood donation drives.' },
    { title: 'Scout Member / Leader– ', desc: 'Actively participated in university scouting programs, developing leadership, teamwork, and problem-solving skills.' },
    { title: 'Networking Club Member– ', desc: 'Participated in hands-on lab sessions and workshops on Cisco networking and Packet Tracer simulations.' }
  ];

  volItems.forEach(v => {
    const fullText = v.title + v.desc;
    const lines = doc.splitTextToSize(fullText, rightColWidth);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(lines, rightColX, yRight);
    yRight += lines.length * 3.8 + 2;
  });
  yRight += 4;

  // 3. PERSONAL DETAILS
  yRight = sectionTitle('PERSONAL DETAILS', rightColX, yRight, rightColWidth);

  const personalData = [
    ['Father\'s Name', ':', 'Md. Golam Mostofa'],
    ['Mother\'s Name', ':', 'Late Samsunnahar'],
    ['Date of Birth', ':', '01-Oct-1997'],
    ['Gender', ':', 'Male'],
    ['Height (Meter)', ':', '5\'3"'],
    ['Weight (Kg)', ':', '70'],
    ['Marital Status', ':', 'Married'],
    ['Nationality', ':', 'Bangladeshi'],
    ['Religion', ':', 'Islam'],
    ['Permanent Address', ':', 'Khaspukuria, Chauhali, Sirajganj'],
    ['Current Location', ':', 'Dhaka'],
    ['Blood Group', ':', 'A+']
  ];

  personalData.forEach(([label, colon, val]) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 30, 30);
    doc.text(label, rightColX, yRight);
    doc.text(colon, rightColX + 34, yRight);
    doc.setFont('helvetica', 'normal');
    doc.text(val, rightColX + 38, yRight);
    yRight += 4.5;
  });

  const pdfOutput = doc.output('arraybuffer');
  fs.writeFileSync('public/Md_Kamrul_Islam_CV.pdf', Buffer.from(pdfOutput));
  console.log('Successfully generated public/Md_Kamrul_Islam_CV.pdf');
}

generateCV();
