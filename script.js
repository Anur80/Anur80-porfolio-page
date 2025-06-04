// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navContainer = document.querySelector('.nav-container');

navToggle.addEventListener('click', () => {
    navContainer.classList.toggle('active');
});

// Add event listeners to all navigation links
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-page]');
    if (link) {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        navigateTo(page);
        // Close mobile menu if open
        navContainer.classList.remove('active');
    }
});

// Page Navigation System
const mainContent = document.querySelector('body');
const navLinks = document.querySelectorAll('.nav-links a');

// Create a main content container if it doesn't exist
let mainContainer = document.getElementById('main-container');
if (!mainContainer) {
    mainContainer = document.createElement('div');
    mainContainer.id = 'main-container';
    // Insert the container after the hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.parentNode.insertBefore(mainContainer, heroSection.nextSibling);
    } else {
        document.body.appendChild(mainContainer);
    }
}

// Function to handle page navigation
function navigateTo(page) {
    // Hide all sections first
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Hide hero and main section by default
    const heroSection = document.querySelector('.hero');
    const mainSection = document.querySelector('.main-section');
    if (heroSection) heroSection.style.display = 'none';
    if (mainSection) mainSection.style.display = 'none';
    
    // Update active link in navigation
    document.querySelectorAll('.nav-links a').forEach(navLink => {
        navLink.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`.nav-links a[data-page="${page}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Show the appropriate section based on the page
    if (page === 'contact') {
        renderContactPage();
    } else if (page === 'about') {
        renderAboutPage();
    } else if (page === 'services') {
        renderServicesPage();
    } else if (page === 'projects') {
        renderProjectsPage();
    } else if (page === 'blog') {
        renderBlogPage();
    } else if (page === 'home') {
        if (heroSection) heroSection.style.display = 'flex';
        if (mainSection) mainSection.style.display = 'block';
    }
    
    // Let footer flow naturally with the page content
    const footer = document.querySelector('footer');
    if (footer) {
        footer.style.width = '100%';
    }
    
    // Scroll to top of page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to render the contact page
function renderContactPage() {
    // Check if contact section already exists
    let contactSection = document.getElementById('contact-section');
    
    if (!contactSection) {
        // Create contact section if it doesn't exist
        contactSection = document.createElement('section');
        contactSection.id = 'contact-section';
        contactSection.className = 'contact-section';
        
        // Create contact page HTML structure
        contactSection.innerHTML = `
            <div class="contact-container" style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
                <div class="contact-header" style="text-align: left; margin-bottom: 2rem;">
                    <h1 style="color: var(--violet); font-size: 1.5rem; margin-bottom: 0.5rem;">CONTACT</h1>
                    <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">Get in Touch</h2>
                    <p style="color: var(--light-black);">Reach out to me for any freelancing opportunity</p>
                </div>
                
                <div class="contact-content" style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start;">
                    <div class="contact-left" style="display: flex; flex-direction: column; gap: 2rem;">
                        <div class="contact-image" style="width: 100%; margin-bottom: 1rem;">
                            <img src="./Projects/contact image.jpg" alt="Contact Image" style="width: 100%; height: auto; border-radius: 8px;">
                        </div>
                        <div class="contact-info" style="margin-bottom: 1rem;">
                            <h3 style="color: var(--black); margin-bottom: 0.5rem;">Anur Mayiik</h3>
                            <p style="margin-bottom: 0.5rem;">Full Stack Web Developer</p>
                            <p style="color: var(--light-black);">Do you have any ideas you would love to bring to life , whether it's a UI/UX design to give to your next State Jobs or Elon Musk . Reach out , I would love to explore this journey with you</p>
                        </div>
                        <div class="contact-social">
                            <h3 style="margin-bottom: 1rem;">CONNECT WITH ME</h3>
                            <div class="social-links" style="display: flex; gap: 1rem;">
                                <a href="https://github.com/Anur80" aria-label="GitHub" style="width: 40px; height: 40px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 16px var(--violet); transition: transform 0.3s ease, box-shadow 0.3s ease; color: var(--black);"><i class="fab fa-github"></i></a>
                                <a href="https://www.instagram.com/anuri_80?igsh=N21xdjluNjlrNnoy" aria-label="Instagram" style="width: 40px; height: 40px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 16px var(--violet); transition: transform 0.3s ease, box-shadow 0.3s ease; color: var(--black);"><i class="fab fa-instagram"></i></a>
                                <a href="#" aria-label="Discord" style="width: 40px; height: 40px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 16px var(--violet); transition: transform 0.3s ease, box-shadow 0.3s ease; color: var(--black);"><i class="fab fa-discord"></i></a>
                                <a href="https://www.linkedin.com/in/anur-mayiik-89a446311" aria-label="LinkedIn" style="width: 40px; height: 40px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 16px var(--violet); transition: transform 0.3s ease, box-shadow 0.3s ease; color: var(--black);"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-right" style="background: white; padding: 2rem; border-radius: 8px;">
                        <form id="contact-form" style="display: flex; flex-direction: column; gap: 1.5rem;">
                            <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div class="form-group">
                                    <input type="text" id="name" name="name" placeholder="Name" required style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 1rem;">
                                </div>
                                <div class="form-group">
                                    <input type="tel" id="phone" name="phone" placeholder="Phone" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 1rem;">
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="email" id="email" name="email" placeholder="Email" required style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 1rem;">
                            </div>
                            <div class="form-group">
                                <input type="text" id="subject" name="subject" placeholder="Subject" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 1rem;">
                            </div>
                            <div class="form-group">
                                <textarea id="message" name="message" rows="8" placeholder="Message" required style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 2rem;"></textarea>
                            </div>
                            <button type="submit" class="send-button" style="background: var(--violet); color: white; padding: 0.75rem 2rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 500; width: 100%;">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
        
        // Add the contact section to the main container
        mainContainer.appendChild(contactSection);
        
        // Add event listener to the form
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Send form using EmailJS
            emailjs.sendForm('21500012075', 'template_py8drbr', contactForm)
                .then(function() {
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                }, function(error) {
                    alert('Oops! Something went wrong. Please try again later.');
                    console.error('EmailJS error:', error);
                });
        });
    }
    
    // Display the contact section
    contactSection.style.display = 'block';
    
    // Scroll to top of contact section
    contactSection.scrollIntoView({ behavior: 'smooth' });
}


// Function to render the services page
function renderServicesPage() {
    let servicesSection = document.getElementById('services-section');
    
    if (!servicesSection) {
        servicesSection = document.createElement('section');
        servicesSection.id = 'services-section';
        servicesSection.className = 'services-section';
        
        servicesSection.innerHTML = `
            <div class="services-container" style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
                <div class="services-header" style="text-align: center; margin-bottom: 3rem;">
                    <h1>SERVICES</h1>
                    <h2>What I Offer</h2>
                    <p>Explore the range of digital solutions I provide to help your business grow</p>
                </div>
                
                <div class="services-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                    <div class="service-card" style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
                        <i class="fas fa-code fa-3x" style="color: #673AB7; margin-bottom: 1rem;"></i>
                        <h3 style="margin-bottom: 1rem;">Web Development</h3>
                        <p>Custom websites built with modern technologies, focusing on performance, responsiveness, and user experience.</p>
                    </div>
                    
                    <div class="service-card" style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
                        <i class="fas fa-paint-brush fa-3x" style="color: #673AB7; margin-bottom: 1rem;"></i>
                        <h3 style="margin-bottom: 1rem;">UI/UX Design</h3>
                        <p>Intuitive and engaging user interfaces designed to enhance user experience and drive engagement.</p>
                    </div>
                    
                    <div class="service-card" style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
                        <i class="fas fa-mobile-alt fa-3x" style="color: #673AB7; margin-bottom: 1rem;"></i>
                        <h3 style="margin-bottom: 1rem;">Responsive Design</h3>
                        <p>Mobile-first websites that look and function perfectly across all devices and screen sizes.</p>
                    </div>
                    
                    <div class="service-card" style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
                        <i class="fas fa-search fa-3x" style="color: #673AB7; margin-bottom: 1rem;"></i>
                        <h3 style="margin-bottom: 1rem;">SEO Optimization</h3>
                        <p>Search engine optimization to improve your website's visibility and drive organic traffic.</p>
                    </div>
                    
                    <div class="service-card" style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
                        <i class="fas fa-shopping-cart fa-3x" style="color: #673AB7; margin-bottom: 1rem;"></i>
                        <h3 style="margin-bottom: 1rem;">E-commerce Solutions</h3>
                        <p>Custom online stores with secure payment integration and inventory management systems.</p>
                    </div>
                    
                    <div class="service-card" style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
                        <i class="fas fa-server fa-3x" style="color: #673AB7; margin-bottom: 1rem;"></i>
                        <h3 style="margin-bottom: 1rem;">Web Hosting</h3>
                        <p>Reliable hosting solutions with regular maintenance and security updates.</p>
                    </div>
                </div>
                
                <div class="cta-container" style="text-align: center; margin-top: 3rem;">
                    <h3 style="margin-bottom: 1rem;">Ready to Start Your Project?</h3>
                    <button onclick="navigateTo('contact')" style="background: white; color: #673AB7; padding: 1rem 2rem; border: 2px solid #673AB7; border-radius: 4px; cursor: pointer; font-weight: 500; transition: all 0.3s ease;">Get in Touch</button>
                </div>
            </div>
        `;
        
        mainContainer.appendChild(servicesSection);
    }
    
    servicesSection.style.display = 'block';
    servicesSection.scrollIntoView({ behavior: 'smooth' });
}

// Function to render the projects page
// function renderProjectsPage() {
//     let projectsSection = document.getElementById('projects-section');
    
//     if (!projectsSection) {
//         projectsSection = document.createElement('section');
//         projectsSection.id = 'projects-section';
//         projectsSection.className = 'projects-section';
        
//         projectsSection.innerHTML = `
//             <div class="projects-container" style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
//                 <div class="projects-header" style="text-align: center; margin-bottom: 3rem;">
//                     <h1>PROJECTS</h1>
//                     <h2>My Recent Work</h2>
//                     <p>Here are some of the projects I've worked on recently</p>
//                 </div>
                
//                 <div class="projects-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 2rem;">
//                     <div class="project-card" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
//                         <div style="height: 200px; overflow: hidden;">
//                             <img src="./Projects/Gillingham Online shop banner.png" alt="E-commerce Project" style="width: 100%; height: 100%; object-fit: cover;">
//                         </div>
//                         <div style="padding: 1.5rem;">
//                             <h3 style="margin-bottom: 1rem;">E-commerce Website</h3>
//                             <p style="margin-bottom: 1rem;">A full-featured online shop with product management, cart functionality, and secure checkout.</p>
//                             <div style="display: flex; gap: 1.5rem; margin-bottom: 1rem;">
//                                 <span style="background: #f0f0f0; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;"><i class="fab fa-html5" style="color: #e34c26; margin-right: 0.3rem;"></i>HTML5</span>
//                                 <span style="background: #f0f0f0; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;"><i class="fab fa-css3-alt" style="color: #264de4; margin-right: 0.3rem;"></i>CSS3</span>
//                                 <span style="background: #f0f0f0; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;"><i class="fab fa-js" style="color: #f7df1e; margin-right: 0.3rem;"></i>JavaScript</span>
//                             </div>
//                             <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto;">
//                                 <a href="#" style="color: #333; font-size: 1.2rem; transition: color 0.3s ease;" title="View Live Demo"><i class="fas fa-external-link-alt"></i></a>
//                                 <a href="#" style="color: #333; font-size: 1.2rem; transition: color 0.3s ease;" title="View on GitHub"><i class="fab fa-github"></i></a>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div class="project-card" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 16px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;">
//                         <div style="height: 220px; overflow: hidden; position: relative;">
//                             <img src="./Projects/About page UI design.png" alt="Portfolio Website" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
//                         </div>
//                         <div style="padding: 1.8rem;">
//                             <h3 style="margin-bottom: 1.2rem; font-size: 1.4rem; color: #333;">Portfolio Website</h3>
//                             <p style="margin-bottom: 1.5rem; color: #666; line-height: 1.6;">A modern portfolio website showcasing projects and services with a clean, responsive design.</p>
//                             <div style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-bottom: 1.5rem;">
//                                 <span style="background: #f8f9fa; padding: 0.6rem 1rem; border-radius: 20px; font-size: 0.9rem; display: flex; align-items: center; transition: transform 0.2s ease;"><i class="fab fa-html5" style="color: #e34c26; margin-right: 0.5rem;"></i>HTML5</span>
//                                 <span style="background: #f8f9fa; padding: 0.6rem 1rem; border-radius: 20px; font-size: 0.9rem; display: flex; align-items: center; transition: transform 0.2s ease;"><i class="fab fa-css3-alt" style="color: #264de4; margin-right: 0.5rem;"></i>CSS3</span>
//                                 <span style="background: #f8f9fa; padding: 0.6rem 1rem; border-radius: 20px; font-size: 0.9rem; display: flex; align-items: center; transition: transform 0.2s ease;"><i class="fab fa-js" style="color: #f7df1e; margin-right: 0.5rem;"></i>JavaScript</span>
//                             </div>
//                             <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid #eee;">
//                                 <a href="#" style="color: #673AB7; font-size: 1.3rem; transition: all 0.3s ease; display: flex; align-items: center; gap: 0.5rem;" title="View Live Demo"><i class="fas fa-external-link-alt"></i><span style="font-size: 0.9rem;">Live Demo</span></a>
//                                 <a href="#" style="color: #673AB7; font-size: 1.3rem; transition: all 0.3s ease; display: flex; align-items: center; gap: 0.5rem;" title="View on GitHub"><i class="fab fa-github"></i><span style="font-size: 0.9rem;">Source</span></a>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="project-card" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
//                         <div style="height: 200px; overflow: hidden;">
//                             <img src="./Projects/Paint background.jpg" alt="Blog Platform" style="width: 100%; height: 100%; object-fit: cover;">
//                         </div>
//                         <div style="padding: 1.5rem;">
//                             <h3 style="margin-bottom: 1rem;">Blog Platform</h3>
//                             <p style="margin-bottom: 1rem;">A dynamic blog platform with user authentication, comment system, and rich text editing capabilities.</p>
//                             <div style="display: flex; gap: 1.5rem; margin-bottom: 1rem;">
//                                 <span style="background: #f0f0f0; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;"><i class="fab fa-html5" style="color: #e34c26; margin-right: 0.3rem;"></i>HTML5</span>
//                                 <span style="background: #f0f0f0; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;"><i class="fab fa-css3-alt" style="color: #264de4; margin-right: 0.3rem;"></i>CSS3</span>
//                                 <span style="background: #f0f0f0; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;"><i class="fab fa-js" style="color: #f7df1e; margin-right: 0.3rem;"></i>JavaScript</span>
//                             </div>
//                             <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto;">
//                                 <a href="#" style="color: #333; font-size: 1.2rem; transition: color 0.3s ease;" title="View Live Demo"><i class="fas fa-external-link-alt"></i></a>
//                                 <a href="#" style="color: #333; font-size: 1.2rem; transition: color 0.3s ease;" title="View on GitHub"><i class="fab fa-github"></i></a>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="project-card" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
//                         <div style="height: 200px; overflow: hidden;">
//                             <img src="./Projects/download.jpg" alt="Task Manager" style="width: 100%; height: 100%; object-fit: cover;">
//                         </div>
//                         <div style="padding: 1.5rem;">
//                             <h3 style="margin-bottom: 1rem;">Task Manager</h3>
//                             <p style="margin-bottom: 1rem;">A comprehensive task management application with drag-and-drop functionality and progress tracking.</p>
//                             <div style="display: flex; gap: 1.5rem; margin-bottom: 1rem;">
//                                 <span style="background: #f0f0f0; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;"><i class="fab fa-html5" style="color: #e34c26; margin-right: 0.3rem;"></i>HTML5</span>
//                                 <span style="background: #f0f0f0; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;"><i class="fab fa-css3-alt" style="color: #264de4; margin-right: 0.3rem;"></i>CSS3</span>
//                                 <span style="background: #f0f0f0; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;"><i class="fab fa-js" style="color: #f7df1e; margin-right: 0.3rem;"></i>JavaScript</span>
//                             </div>
//                             <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto;">
//                                 <a href="#" style="color: #333; font-size: 1.2rem; transition: color 0.3s ease;" title="View Live Demo"><i class="fas fa-external-link-alt"></i></a>
//                                 <a href="#" style="color: #333; font-size: 1.2rem; transition: color 0.3s ease;" title="View on GitHub"><i class="fab fa-github"></i></a>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div class="project-card" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
//                         <div style="height: 200px; overflow: hidden;">
//                             <img src="./Projects/Paint background.jpg" alt="Blog Platform" style="width: 100%; height: 100%; object-fit: cover;">
//                         </div>
//                         <div style="padding: 1.5rem;">
//                             <h3 style="margin-bottom: 1rem;">Blog Platform</h3>
//                             <p style="margin-bottom: 1rem;">A feature-rich blog platform with content management system, user authentication, and markdown support.</p>
//                             <div style="display: flex; gap: 1.5rem; margin-bottom: 1rem;">
//                                 <span style="background: #f0f0f0; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;"><i class="fab fa-html5" style="color: #e34c26; margin-right: 0.3rem;"></i>HTML5</span>
//                                 <span style="background: #f0f0f0; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;"><i class="fab fa-css3-alt" style="color: #264de4; margin-right: 0.3rem;"></i>CSS3</span>
//                                 <span style="background: #f0f0f0; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;"><i class="fab fa-js" style="color: #f7df1e; margin-right: 0.3rem;"></i>JavaScript</span>
//                             </div>
//                             <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto;">
//                                 <a href="#" style="color: #333; font-size: 1.2rem; transition: color 0.3s ease;" title="View Live Demo"><i class="fas fa-external-link-alt"></i></a>
//                                 <a href="#" style="color: #333; font-size: 1.2rem; transition: color 0.3s ease;" title="View on GitHub"><i class="fab fa-github"></i></a>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="project-card" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
//                         <div style="height: 200px; overflow: hidden;">
//                             <img src="./Projects/Paint background.jpg" alt="Blog Platform" style="width: 100%; height: 100%; object-fit: cover;">
//                         </div>
//                         <div style="padding: 1.5rem;">
//                             <h3 style="margin-bottom: 1rem;">Blog Platform</h3>
//                             <p style="margin-bottom: 1rem;">A custom blog platform with content management system and user authentication.</p>
//                             <div style="display: flex; gap: 1.5rem; margin-bottom: 1rem;">
//                                 <span style="background: #f0f0f0; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;"><i class="fab fa-html5" style="color: #e34c26; margin-right: 0.3rem;"></i>HTML5</span>
//                                 <span style="background: #f0f0f0; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;"><i class="fab fa-css3-alt" style="color: #264de4; margin-right: 0.3rem;"></i>CSS3</span>
//                                 <span style="background: #f0f0f0; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;"><i class="fab fa-js" style="color: #f7df1e; margin-right: 0.3rem;"></i>JavaScript</span>
//                             </div>
//                             <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto;">
//                                 <a href="#" style="color: #333; font-size: 1.2rem; transition: color 0.3s ease;" title="View Live Demo"><i class="fas fa-external-link-alt"></i></a>
//                                 <a href="#" style="color: #333; font-size: 1.2rem; transition: color 0.3s ease;" title="View on GitHub"><i class="fab fa-github"></i></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div style="text-align: center; margin-top: 3rem;">
//                     <button onclick="window.location.href='#'" style="background: white; color: #673AB7; padding: 0.75rem 2rem; border: 1px solid #673AB7; border-radius: 4px; cursor: pointer; font-weight: 300; transition: all 0.3s ease; width: 6cm;">View More →</button>
//                 </div>
//             </div>
//         `;
        
//         mainContainer.appendChild(projectsSection);
//     }
    
//     projectsSection.style.display = 'block';
//     projectsSection.scrollIntoView({ behavior: 'smooth' });
// }

// Function to render the blog page
function renderBlogPage() {
    let blogSection = document.getElementById('blog-section');
    
    if (!blogSection) {
        blogSection = document.createElement('section');
        blogSection.id = 'blog-section';
        blogSection.className = 'blog-section';
        
        blogSection.innerHTML = `
            <div class="blog-container" style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
                <div class="blog-header" style="text-align: center; margin-bottom: 3rem;">
                    <h1>BLOG</h1>
                    <h2>Latest Articles</h2>
                    <p>Insights and updates from the world of web development</p>
                </div>
                
                <div class="blog-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                    <div class="blog-card" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <div style="height: 200px; overflow: hidden;">
                            <img src="./Projects/Paint background.jpg" alt="Web Development Trends" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div style="padding: 1.5rem;">
                            <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                                <span style="color: #666; font-size: 0.9rem;">March 15, 2024</span>
                                <span style="color: #666; font-size: 0.9rem;">Web Development</span>
                            </div>
                            <h3 style="margin-bottom: 1rem;">Top Web Development Trends in 2024</h3>
                            <p style="margin-bottom: 1rem;">Explore the latest trends and technologies shaping the future of web development.</p>
                            <a href="#" style="color: #673AB7; text-decoration: none; font-weight: 500;">Read More →</a>
                        </div>
                    </div>
                    
                    <div class="blog-card" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <div style="height: 200px; overflow: hidden;">
                            <img src="./Projects/About page UI design.png" alt="UI Design Tips" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div style="padding: 1.5rem;">
                            <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                                <span style="color: #666; font-size: 0.9rem;">March 10, 2024</span>
                                <span style="color: #666; font-size: 0.9rem;">UI/UX Design</span>
                            </div>
                            <h3 style="margin-bottom: 1rem;">Essential UI Design Tips for Developers</h3>
                            <p style="margin-bottom: 1rem;">Learn how to create user-friendly interfaces that enhance user experience.</p>
                            <a href="#" style="color: #673AB7; text-decoration: none; font-weight: 500;">Read More →</a>
                        </div>
                    </div>
                    
                    <div class="blog-card" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <div style="height: 200px; overflow: hidden;">
                            <img src="./Projects/Gillingham Online shop banner.png" alt="E-commerce Solutions" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div style="padding: 1.5rem;">
                            <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                                <span style="color: #666; font-size: 0.9rem;">March 5, 2024</span>
                                <span style="color: #666; font-size: 0.9rem;">E-commerce</span>
                            </div>
                            <h3 style="margin-bottom: 1rem;">Building Secure E-commerce Solutions</h3>
                            <p style="margin-bottom: 1rem;">Best practices for creating secure and efficient online shopping experiences.</p>
                            <a href="#" style="color: #673AB7; text-decoration: none; font-weight: 500;">Read More →</a>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 3rem;">
                    <button onclick="window.location.href='#'" style="background: white; color: #673AB7; padding: 0.75rem 2rem; border: 1px solid #673AB7; border-radius: 4px; cursor: pointer; font-weight: 300; transition: all 0.3s ease; width: 6cm;">View More →</button>
                </div>
            </div>
        `;
        
        mainContainer.appendChild(blogSection);
    }
    
    blogSection.style.display = 'block';
    blogSection.scrollIntoView({ behavior: 'smooth' });
}


        // Function to render the about page
function renderAboutPage() {
    // Check if about section already exists
    let aboutSection = document.getElementById('about-section');
    
    if (!aboutSection) {
        // Create about section if it doesn't exist
        aboutSection = document.createElement('section');
        aboutSection.id = 'about-section';
        aboutSection.className = 'about-section';
        
        // Create about page HTML structure
        aboutSection.innerHTML = `
            <div class="about-container">
                <div class="about-left" style="background-color: #f6f6f6; padding: 2rem;">
                    <img src="./Projects/passport_pic-removebg-preview.png" alt="Profile Picture" style="width: 100%; max-width: 300px; margin-bottom: 2rem;">
                    <h2 style="font-family: Montserrat, sans-serif; margin-bottom: 1rem;">Junior Developer | Brandist</h2>
                    <button class="hello-btn" style="padding: 1rem 2rem; background: white; border: none; border-radius: 5px; font-family: Montserrat, sans-serif; cursor: pointer;">Say hello →</button>
                </div>
                
                <div class="about-right" style="background-color: white; padding: 2rem;">
                    <div style="margin-bottom: 2rem;">
                        <h2 style="font-family: Montserrat, sans-serif; font-weight: bold; border-bottom: 1px solid #333; display: inline-block; padding-bottom: 0.5rem;">About Me</h2>
                    </div>
                    <h3 style="font-family: Montserrat, sans-serif; margin-bottom: 2rem; font-weight: 400; line-height: 1.6; padding: 1rem; background-color: #f8f8f8; border-left: 4px solid var(--violet);">I am a dedicated Junior Developer and Brandist passionate about crafting engaging web experiences and powerful brand identities. With expertise in coding and design, I create websites that are both visually appealing and highly functional. My approach blends technical precision with creative innovation to deliver solutions that captivate and connect with audiences. I focus on building intuitive interfaces and cohesive branding strategies that leave a lasting impact. By embracing collaboration and refining ideas iteratively, I ensure every project achieves excellence. I am driven by the intersection of technology and creativity, always seeking new ways to push boundaries and inspire.</h3>
                    <div style="display: flex; gap: 1rem;">
                        <a href="https://drive.google.com/file/d/1PWmG7Ar5JET8-2CKjO8Ea_r321z1m4Wf/view?usp=drive_link" target="_blank" style="text-decoration: none;"><button style="padding: 1rem 2rem; background: white; border: 1px solid #333; border-radius: 5px; font-family: Montserrat, sans-serif; cursor: pointer;">Resume →</button></a>
                        <button style="padding: 1rem 2rem; background: white; border: 1px solid #333; border-radius: 5px; font-family: Montserrat, sans-serif; cursor: pointer;">Biography →</button>
                    </div>
                </div>
            </div>
            
            <div class="skills-container" style="background-color: white; padding: 4rem 2rem; margin-top: 2rem;">
                <h3 style="text-align: center; font-family: Montserrat, sans-serif; color: #666; margin-bottom: 2rem;">Skills</h3>
                <div style="display: flex; justify-content: space-between; gap: 2rem;">
                    <div class="skills-section" style="flex: 1; padding-right: 2rem; border-right: 1px solid #ddd;">
                        <h2 style="text-align: center; font-family: Montserrat, sans-serif; font-weight: bold; margin-bottom: 2rem;">What I can Do as A developer</h2>
                        <div class="dev-skills" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(5cm, 1fr)); gap: 1rem;">
                            <div class="skill-card" style="background: white; border-radius: 5px; padding: 1rem; text-align: center; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                                <i class="fab fa-html5 fa-2x" style="color: #E34F26; margin-bottom: 0.5rem;"></i>
                                <span>HTML5</span>
                            </div>
                            <div class="skill-card" style="background: white; border-radius: 5px; padding: 1rem; text-align: center; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                                <i class="fab fa-css3-alt fa-2x" style="color: #1572B6; margin-bottom: 0.5rem;"></i>
                                <span>CSS3</span>
                            </div>
                            <div class="skill-card" style="background: white; border-radius: 5px; padding: 1rem; text-align: center; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                                <i class="fab fa-js fa-2x" style="color: #F7DF1E; margin-bottom: 0.5rem;"></i>
                                <span>JavaScript</span>
                            </div>
                            <div class="skill-card" style="background: white; border-radius: 5px; padding: 1rem; text-align: center; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                                <i class="fab fa-react fa-2x" style="color: #61DAFB; margin-bottom: 0.5rem;"></i>
                                <span>React.js</span>
                            </div>
                            <div class="skill-card" style="background: white; border-radius: 5px; padding: 1rem; text-align: center; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                                <i class="fab fa-css3 fa-2x" style="color: #38B2AC; margin-bottom: 0.5rem;"></i>
                                <span>Tailwind CSS</span>
                            </div>
                            <div class="skill-card" style="background: white; border-radius: 5px; padding: 1rem; text-align: center; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                                <i class="fab fa-node-js fa-2x" style="color: #339933; margin-bottom: 0.5rem;"></i>
                                <span>Node.js</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="skills-section" style="flex: 1; padding-left: 2rem;">
                        <h2 style="text-align: center; font-family: Montserrat, sans-serif; font-weight: bold; margin-bottom: 2rem;">What I can Do as A brandist</h2>
                        <div class="brand-skills" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(4cm, 1fr)); gap: 1rem;">
                            <div class="skill-card" style="background: white; border-radius: 5px; padding: 1rem; text-align: center; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                                <i class="fas fa-pencil-ruler fa-2x" style="color: #FF7F50; margin-bottom: 0.5rem;"></i>
                                <span>Graphic Designer</span>
                            </div>
                            <div class="skill-card" style="background: white; border-radius: 5px; padding: 1rem; text-align: center; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                                <i class="fas fa-bullhorn fa-2x" style="color: #4B0082; margin-bottom: 0.5rem;"></i>
                                <span>Digital Marketer</span>
                            </div>
                            <div class="skill-card" style="background: white; border-radius: 5px; padding: 1rem; text-align: center; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                                <i class="fas fa-shopping-cart fa-2x" style="color: #20B2AA; margin-bottom: 0.5rem;"></i>
                                <span>E-commerce Shop</span>
                            </div>
                            <div class="skill-card" style="background: white; border-radius: 5px; padding: 1rem; text-align: center; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                                <i class="fas fa-search fa-2x" style="color: #FF4500; margin-bottom: 0.5rem;"></i>
                                <span>SEO Optimization</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 3rem;">
                    <button onclick="window.location.href='#'" style="background: white; color: #673AB7; padding: 0.75rem 2rem; border: 1px solid #673AB7; border-radius: 4px; cursor: pointer; font-weight: 300; transition: all 0.3s ease; width: 6cm;">View More →</button>
                </div>
            </div>
        `;
        
        // Add the about section to the main container
        mainContainer.appendChild(aboutSection);

        // Add click event listener to the hello button
        const helloButton = aboutSection.querySelector('.hello-btn');
        helloButton.addEventListener('click', () => {
            navigateTo('contact');
        });
    }
    
    // Display the about section
    aboutSection.style.display = 'block';
    
    // Scroll to top of about section
    aboutSection.scrollIntoView({ behavior: 'smooth' });}