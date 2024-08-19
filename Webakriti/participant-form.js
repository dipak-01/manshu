





document.getElementById('participant-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Collect form data
    const participant1 = {
        name: document.getElementById('participant1-name').value,
        college: document.getElementById('participant1-college').value
    };
    const participant2 = {
        name: document.getElementById('participant2-name').value,
        college: document.getElementById('participant2-college').value
    };
    const participant3 = {
        name: document.getElementById('participant3-name').value,
        college: document.getElementById('participant3-college').value
    };

    // Prepare data to send
    const templateParams = {
        to_email: 'imt_2023051@iiitm.ac.in', // The recipient email address
        participant1_name: participant1.name,
        participant1_college: participant1.college,
        participant2_name: participant2.name,
        participant2_college: participant2.college,
        participant3_name: participant3.name,
        participant3_college: participant3.college
    };

    try {
        // Initialize EmailJS with your public key
        emailjs.init("iuiuViLHrLUU5i6ka");

        // Send email via EmailJS
        await emailjs.send('service_sl12j8f', 'template_04qugmo', templateParams);
        
        // Notify user of success
        alert('Details submitted successfully!');

        // Optionally clear the form
        document.getElementById('participant-form').reset();
    } catch (error) {
        console.error('Failed to send email:', error);
        alert('Failed to send email: ' + JSON.stringify(error));  // Display detailed error message
    }
});
