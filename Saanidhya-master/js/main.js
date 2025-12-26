// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            
            try {
                const response = await fetch('contact.php', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();
                
                // Show alert message
                const alertDiv = document.createElement('div');
                alertDiv.className = result.success 
                    ? 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg'
                    : 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg';
                alertDiv.textContent = result.message;
                
                document.body.appendChild(alertDiv);
                
                // Remove alert after 3 seconds
                setTimeout(() => {
                    alertDiv.remove();
                }, 3000);

                // Clear form if successful
                if (result.success) {
                    contactForm.reset();
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }
});

// Mobile menu toggle
const mobileMenuButton = document.createElement('button');
mobileMenuButton.className = 'md:hidden p-2';
mobileMenuButton.innerHTML = `
    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
`;

const nav = document.querySelector('nav .container');
const menuItems = document.querySelector('nav .hidden');

if (nav && menuItems) {
    nav.firstElementChild.appendChild(mobileMenuButton);

    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'md:hidden';
    mobileMenu.innerHTML = menuItems.innerHTML;
    mobileMenu.style.display = 'none';
    
    nav.appendChild(mobileMenu);

    mobileMenuButton.addEventListener('click', () => {
        const isHidden = mobileMenu.style.display === 'none';
        mobileMenu.style.display = isHidden ? 'block' : 'none';
        
        if (isHidden) {
            mobileMenu.classList.add('animate-fadeIn');
            mobileMenu.classList.remove('animate-fadeOut');
        } else {
            mobileMenu.classList.add('animate-fadeOut');
            mobileMenu.classList.remove('animate-fadeIn');
        }
    });
}

// Add scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (elementPosition < screenPosition) {
            element.classList.add('aos-animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); 