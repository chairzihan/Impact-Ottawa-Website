document.addEventListener("DOMContentLoaded", function() {
    // Wait until both DOM and other JS are ready
    setTimeout(function() {
        // 1. Add Donate link to navigation
        const navLinks = document.querySelector('#nav-links');
        if (navLinks && !navLinks.querySelector('[href="#donate"]')) {
            navLinks.innerHTML += '<a href="#donate">Donate</a>';
        }

        // 2. Donation button functionality
        const donateButtons = document.querySelectorAll('.donate-btn');
        donateButtons.forEach(button => {
            button.addEventListener('click', function() {
                let amount = this.dataset.amount;
                
                // Handle custom amount
                if (!amount) {
                    const input = this.parentElement.querySelector('input');
                    if (input) {
                        amount = input.value.trim();
                        if (!amount || isNaN(amount)) {
                            alert('Please enter a valid amount');
                            return;
                        }
                    }
                }
                
                // Process donation (simulated)
                processDonation(amount);
            });
        });

        // 3. Make sure donation section works with your switcher
        const donateLink = document.querySelector('a[href="#donate"]');
        if (donateLink) {
            donateLink.addEventListener('click', function(e) {
                e.preventDefault();
                const targetSection = document.getElementById('donate');
                if (targetSection) {
                    // Hide all sections
                    document.querySelectorAll('section').forEach(section => {
                        section.classList.remove('active');
                    });
                    // Show donation section
                    targetSection.classList.add('active');
                }
            });
        }
    }, 100); // Small delay to ensure other JS is loaded
});

function processDonation(amount) {
    // Replace this with actual payment processing in production
    console.log(`Processing donation: $${amount}`);
    alert(`Thank you for your donation of $${amount}!\n\n(This is a simulation. You're not getting robbed.)`);
    
    // Here you would normally:
    // 1. Open payment modal
    // 2. Connect to Stripe/PayPal
    // 3. Handle the transaction
}