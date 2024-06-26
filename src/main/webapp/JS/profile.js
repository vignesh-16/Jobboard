import Toast from "../common/toasters.js";

$(window).on('beforeunload', function() {
    $.ajax({
        url: '/TerminateSession',
        type: 'POST',
        async: false, // Synchronous request to ensure it's completed before the page is unloaded
        success: function() {
            console.log('Session invalidated successfully');
        },
        error: function() {
            console.error('Error invalidating session');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementsByClassName("js-file-input")[0];

    const getPropertyFromFileObject = function(fileObject, property) {
        let fullText, fileInfo;
        if (property === "name") {
            fullText= fileObject.name;
            fileInfo = fullText.split(".");
            return fileInfo[0];
        } else if (property === "type") {
            fullText = fileObject.type;
            fileInfo = fullText.split("/");
            return fileInfo[1];
        } else if (property === "size") {
            fullText = fileObject.size;
            fileInfo = Math.ceil(fullText/1024)
            return fileInfo;
        }
    }

    let file, fileName, fileSize, fileType;

    fileInput.addEventListener('input',()=>{
        console.log(`Hey!! file received!!!`)
        file = fileInput.files[0];
        fileType = getPropertyFromFileObject(file, "type");
        fileSize = getPropertyFromFileObject(file, "size");
        fileName = getPropertyFromFileObject(file, "name");
        console.log(`Hey Js received this file: ${file.name}`)
        if (fileType !== 'pdf') {
            let notification = new Toast ({
                text : `Please select a PDF file to upload you have selected ${fileType}`,
                position: "top-right",
                pauseOnHover: true,
                pauseOnFocusLoss: true
            })
            console.info(`notification ${JSON.stringify(notification)}`)
            alert();
        } else {
            let notification = new Toast ({
                text : `File '${fileName}' uploaded successfully!`,
                position: "top-right",
                pauseOnHover: true,
                pauseOnFocusLoss: true
            })
            console.info(`notification ${JSON.stringify(notification)}`)
            fileInput.labels[0].innerText.replace("Select a file", "Upload resume")
        }
        
    })
});