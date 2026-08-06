// ===============================
// Load Certificate Information
// ===============================

const studentName =
    localStorage.getItem("student_name") || "AI Learner";

document.getElementById("studentName").textContent =
    studentName;

const today = new Date();

document.getElementById("date").textContent =
    today.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

let certificateId =
    localStorage.getItem("certificate_id");

if (!certificateId) {

    const random =
    Math.random().toString(36).substring(2, 8).toUpperCase();

certificateId =
    `ATH-${today.getFullYear()}-${random}`;

    localStorage.setItem(
        "certificate_id",
        certificateId
    );
}

document.getElementById("certificateId").textContent =
    certificateId;


// ===============================
// Edit Certificate Name (Custom Popup)
// ===============================

const editBtn =
    document.getElementById("editNameBtn");

const editModal =
    document.getElementById("editModal");

const editInput =
    document.getElementById("editNameInput");

const cancelBtn =
    document.getElementById("cancelEditBtn");

const saveBtn =
    document.getElementById("saveEditBtn");


editBtn.addEventListener("click", () => {

    editInput.value =
        localStorage.getItem("student_name") ||
        "AI Learner";

    editModal.classList.add("show");

    editInput.focus();

});


cancelBtn.addEventListener("click", () => {

    editModal.classList.remove("show");

});


saveBtn.addEventListener("click", saveCertificateName);

function saveCertificateName() {

    let name = editInput.value.trim();

    if (name === "") {
        name = "AI Learner";
    }

    // Remove extra spaces
    name = name.replace(/\s+/g, " ");

    // Limit length
    if (name.length > 40) {
        name = name.substring(0, 40);
    }

    // Capitalize each word
    name = name.replace(/\b\w/g, c => c.toUpperCase());

    localStorage.setItem("student_name", name);

    document.getElementById("studentName").textContent = name;

    editModal.classList.remove("show");
}

// Save when Enter is pressed
editInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        saveCertificateName();

    }

});

// Close popup with Escape
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        editModal.classList.remove("show");

    }

});

// ==========================================
// Professional PDF Download
// ==========================================

const pdfBtn = document.getElementById("downloadPdfBtn");

pdfBtn.addEventListener("click", async () => {

    pdfBtn.disabled = true;
    pdfBtn.textContent = "Generating PDF...";

    // Copy certificate data
    document.getElementById("pdfStudentName").textContent =
        document.getElementById("studentName").textContent;

    document.getElementById("pdfDate").textContent =
        document.getElementById("date").textContent;

    document.getElementById("pdfCertificateId").textContent =
        document.getElementById("certificateId").textContent;


    
    
    const pdfCertificate =
    document.getElementById("pdfCertificate");

try{

    // Temporarily show the hidden certificate
    pdfCertificate.style.visibility = "visible";

    const canvas =
        await html2canvas(pdfCertificate,{

            scale:3,

            useCORS:true,

            backgroundColor:"#ffffff"

        });

    // Hide it again
    pdfCertificate.style.visibility = "hidden";

        const image =
            canvas.toDataURL("image/png");

        const { jsPDF } = window.jspdf;

        const pdf =
            new jsPDF({

                orientation:"portrait",

                unit:"mm",

                format:"a4"

            });

        pdf.addImage(
            image,
            "PNG",
            0,
            0,
            210,
            297
        );

        const filename =
            "AI-Tools-Hub-Certificate-" +
            studentName.replace(/\s+/g,"-") +
            ".pdf";

        pdf.save(filename);

    }catch(error){

        console.error(error);

        alert("Unable to generate PDF.");

    }

    pdfBtn.disabled=false;
    pdfBtn.textContent="📄 Download PDF";

});

// ==========================================
// Share Certificate
// ==========================================

const shareBtn =
document.getElementById("shareCertificateBtn");

shareBtn.addEventListener("click", async () => {

    try{

        // Copy latest values
        document.getElementById("pdfStudentName").textContent =
            document.getElementById("studentName").textContent;

        document.getElementById("pdfDate").textContent =
            document.getElementById("date").textContent;

        document.getElementById("pdfCertificateId").textContent =
            document.getElementById("certificateId").textContent;

       
        
        
        const pdfCertificate =
        document.getElementById("pdfCertificate");

        pdfCertificate.style.visibility="visible";

        const canvas =
        await html2canvas(pdfCertificate,{
            scale:3,
            useCORS:true,
            backgroundColor:"#ffffff"
        });

        pdfCertificate.style.visibility="hidden";

        canvas.toBlob(async(blob)=>{

            const file =
            new File(
                [blob],
                "AI-Tools-Hub-Certificate.png",
                {
                    type:"image/png"
                }
            );

            if(
                navigator.canShare &&
                navigator.canShare({files:[file]})
            ){

                await navigator.share({

                    title:"AI Learning Hub Certificate",

                    text:
`${document.getElementById("studentName").textContent} has successfully completed the AI Learning Hub course on AI Tools Hub.`,

                    files:[file]

                });

            }else{

                alert("Sharing is not supported on this device.");

            }

        });

    }catch(error){

        console.log(error);

        alert("Unable to share certificate.");

    }

});

