// Portfolio JavaScript - Mobile Responsiveness
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile navigation toggle button
    const createMobileNavToggle = () => {
        const nav = document.querySelector('nav');
        const mobileNavToggle = document.createElement('button');
        mobileNavToggle.className = 'mobile-nav-toggle';
        mobileNavToggle.setAttribute('aria-label', 'Toggle navigation');
        mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
        
        // Insert after logo
        const logo = document.querySelector('.logo');
        if (logo && nav) {
            nav.insertBefore(mobileNavToggle, logo.nextSibling);
        }
    };
    
    // Create nav container for mobile
    const createNavContainer = () => {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');
        const socialLinks = document.querySelector('.social-links');
        
        if (nav && navLinks && socialLinks) {
            // Create container
            const navContainer = document.createElement('div');
            navContainer.className = 'nav-container';
            
            // Move nav links and social links into container
            nav.removeChild(navLinks);
            nav.removeChild(socialLinks);
            navContainer.appendChild(navLinks);
            navContainer.appendChild(socialLinks);
            nav.appendChild(navContainer);
        }
    };
    
    // Toggle mobile navigation
    const setupMobileNavToggle = () => {
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const navContainer = document.querySelector('.nav-container');
        
        if (mobileNavToggle && navContainer) {
            mobileNavToggle.addEventListener('click', function() {
                navContainer.classList.toggle('active');
                
                // Change icon based on menu state
                const icon = this.querySelector('i');
                if (navContainer.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        }
    };
    
    // Close mobile menu when clicking on a link
    const setupNavLinkClickHandlers = () => {
        const navLinks = document.querySelectorAll('.nav-links a');
        const navContainer = document.querySelector('.nav-container');
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        
        if (navLinks.length && navContainer && mobileNavToggle) {
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 900) {
                        navContainer.classList.remove('active');
                        
                        // Reset icon
                        const icon = mobileNavToggle.querySelector('i');
                        if (icon) {
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                });
            });
        }
    };
    
    // Close mobile menu when clicking outside
    const setupOutsideClickHandler = () => {
        document.addEventListener('click', function(event) {
            const navContainer = document.querySelector('.nav-container');
            const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
            
            if (window.innerWidth <= 900 && 
                navContainer && 
                mobileNavToggle && 
                !event.target.closest('.nav-container') && 
                !event.target.closest('.mobile-nav-toggle') && 
                navContainer.classList.contains('active')) {
                
                navContainer.classList.remove('active');
                
                // Reset icon
                const icon = mobileNavToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    };
    
    // Initialize mobile navigation
    const initMobileNav = () => {
        createMobileNavToggle();
        createNavContainer();
        setupMobileNavToggle();
        setupNavLinkClickHandlers();
        setupOutsideClickHandler();
    };
    
    // Call initialization
    initMobileNav();
});