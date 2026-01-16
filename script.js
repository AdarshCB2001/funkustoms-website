// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // ===== CURSOR ORB / FLASHLIGHT EFFECT =====
    // Only show cursor orb on larger screens
    const isMobile = window.innerWidth <= 768;
    
    if (!isMobile) {
        // Create the cursor orb element
        const cursorOrb = document.createElement('div');
        cursorOrb.className = 'cursor-orb';
        document.body.appendChild(cursorOrb);

        // Orb position state
        let orbX = 0;
        let orbY = 0;
        let mouseX = 0;
        let mouseY = 0;
        const lerpFactor = 0.15; // Smoothness factor (0.1-0.2 works well)

        // Linear Interpolation function
        function lerp(start, end, t) {
            return start + (end - start) * t;
        }

        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Animation loop using requestAnimationFrame
        function animateOrb() {
            // Smoothly interpolate orb position toward mouse
            orbX = lerp(orbX, mouseX, lerpFactor);
            orbY = lerp(orbY, mouseY, lerpFactor);

            // Center the orb on the interpolated position (offset by half width/height)
            cursorOrb.style.left = (orbX - 75) + 'px';
            cursorOrb.style.top = (orbY - 75) + 'px';

            requestAnimationFrame(animateOrb);
        }

        animateOrb();
    }
    // ===== END CURSOR ORB EFFECT =====

    // Improved Mobile Menu Handling
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                navbarToggler.click(); // Toggle the menu closed
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            if (!navbar.contains(event.target)) {
                navbarToggler.click();
            }
        }
    });

    // Re-check on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navbarCollapse && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
    
    // Mascot Tooltip Functionality
    const mascotContainers = document.querySelectorAll('.mascot-container');
    console.log(`Found ${mascotContainers.length} mascot containers`);
    
    mascotContainers.forEach((container, index) => {
        const tooltip = container.querySelector('.mascot-tooltip');
        const mascotName = container.dataset.mascot;
        
        if (tooltip) {
            console.log(`Mascot ${index + 1} (${mascotName}) tooltip found and ready`);
            
            // Add explicit hover handlers
            container.addEventListener('mouseenter', function(e) {
                console.log(`Hovering over ${mascotName}`);
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
            });
            
            container.addEventListener('mouseleave', function(e) {
                console.log(`Left ${mascotName}`);
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
            });
        } else {
            console.warn(`Mascot ${index + 1} (${mascotName}) tooltip NOT found`);
        }
    });

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const allNavLinks = document.querySelectorAll('.mobile-nav-link, .nav-link');

    // Toggle mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when a link is clicked
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // If it's a mobile nav link and has href starting with #
            if (this.classList.contains('mobile-nav-link') || this.classList.contains('nav-link')) {
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // Cart functionality
    const cartBtn = document.querySelector('.cart-btn');
    const addToCartBtns = document.querySelectorAll('.product-info .btn-primary');
    let cartCount = 0;
    const cartBadge = document.querySelector('.cart-badge');

    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            alert('Shopping cart is coming soon!');
        });
    }

    // Add to cart buttons
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            cartCount++;
            if (cartBadge) {
                cartBadge.textContent = cartCount;
            }
            showNotification('Product added to cart!');
        });
    });

    // User menu
    const userBtn = document.querySelector('.user-btn');
    if (userBtn) {
        userBtn.addEventListener('click', function() {
            showAuthModal();
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                showNotification('Thanks for subscribing!');
                this.reset();
            }
        });
    }

    // Favorite buttons
    const favoriteButtons = document.querySelectorAll('.product-action-btn');
    favoriteButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                showNotification('Added to favorites!');
            } else {
                showNotification('Removed from favorites!');
            }
        });
    });

    // Category card navigation
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('Navigating to category...');
        });
    });

    // CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Start Customizing')) {
            btn.addEventListener('click', function() {
                scrollToSection('customize');
            });
        } else if (btn.textContent.includes('Browse Gallery')) {
            btn.addEventListener('click', function() {
                showNotification('Gallery coming soon!');
            });
        }
    });

    // All "Browse Products" buttons
    const browseButtons = document.querySelectorAll('.btn-outline');
    browseButtons.forEach(btn => {
        if (btn.textContent.includes('Browse Products')) {
            btn.addEventListener('click', function() {
                scrollToSection('customize');
            });
        }
    });

    // View All Products button
    const viewAllBtn = document.querySelectorAll('.btn-outline');
    viewAllBtn.forEach(btn => {
        if (btn.textContent.includes('View All Products')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                showNotification('Full product catalog coming soon!');
            });
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                scrollToSection(href.substring(1));
            }
        });
    });

    // Add scroll effects
    addScrollEffects();
});

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background-color: #4169e1;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 8px 24px rgba(45, 36, 22, 0.12);
        z-index: 9999;
        animation: slideUp 0.3s ease-out;
        font-weight: 500;
    `;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease-out reverse';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Show auth modal (placeholder)
function showAuthModal() {
    alert('Authentication modal coming soon! For now, you can browse our products.');
}

// Add scroll effects
function addScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slide-up 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe section headers and cards
    document.querySelectorAll('.section-header, .step-card, .product-card').forEach(el => {
        observer.observe(el);
    });
}

// Add style for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Handle active product card favorite state
document.addEventListener('click', function(e) {
    if (e.target.closest('.product-action-btn')) {
        const btn = e.target.closest('.product-action-btn');
        btn.style.transition = 'all 0.3s ease';
        btn.style.backgroundColor = btn.style.backgroundColor === 'rgb(65, 105, 225)' ? '' : 'rgb(65, 105, 225)';
        btn.style.color = btn.style.color === 'white' ? '' : 'white';
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Close mobile menu on escape
    if (e.key === 'Escape') {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    }
});

// Handle responsive behavior
function handleResponsive() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (window.innerWidth >= 768 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
}

window.addEventListener('resize', handleResponsive);

// Add loading optimization
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Initialize tooltips on hover
document.querySelectorAll('[data-tooltip]').forEach(el => {
    el.addEventListener('mouseenter', function() {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = this.dataset.tooltip;
        tooltip.style.cssText = `
            position: absolute;
            background-color: rgba(45, 36, 22, 0.9);
            color: white;
            padding: 0.5rem 0.75rem;
            border-radius: 0.5rem;
            font-size: 0.85rem;
            white-space: nowrap;
            z-index: 1000;
            pointer-events: none;
        `;
        document.body.appendChild(tooltip);
        
        const rect = this.getBoundingClientRect();
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
        tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';

        this.addEventListener('mouseleave', () => {
            tooltip.remove();
        }, { once: true });
    });
});

// Interactive Gradient Background for Founder's Note
const founderSection = document.querySelector('.founder-section');
if (founderSection) {
    const gradientBg = founderSection.querySelector('.gradient-bg');
    
    founderSection.addEventListener('mousemove', (e) => {
        const rect = founderSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        
        gradientBg.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    });
    
    founderSection.addEventListener('mouseleave', () => {
        gradientBg.style.backgroundPosition = '0% 0%';
    });
}

// ===== FLOATING WHATSAPP BUTTON =====
function initWhatsAppButton() {
    // Create WhatsApp button container
    const whatsappBtn = document.createElement('div');
    whatsappBtn.id = 'whatsapp-button';
    whatsappBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 999;
        cursor: pointer;
        animation: bounce 2s infinite;
    `;

    // Create button styling
    whatsappBtn.innerHTML = `
        <a href="https://wa.me/918237603202?text=Hello%20FunKustoms!" target="_blank" rel="noopener noreferrer" style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3.5rem;
            height: 3.5rem;
            background-color: #25d366;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
            transition: all 0.3s ease;
            text-decoration: none;
        " onmouseover="this.style.transform='scale(1.1)'; this.style.boxShadow='0 6px 20px rgba(37, 211, 102, 0.6)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 12px rgba(37, 211, 102, 0.4)';">
            <i class="fab fa-whatsapp" style="color: white; font-size: 1.75rem;"></i>
        </a>
    `;

    document.body.appendChild(whatsappBtn);

    // Add bounce animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-0.5rem);
            }
        }
        
        @media (max-width: 768px) {
            #whatsapp-button {
                bottom: 1.5rem !important;
                right: 1.5rem !important;
            }
            #whatsapp-button a {
                width: 3rem !important;
                height: 3rem !important;
            }
            #whatsapp-button a i {
                font-size: 1.5rem !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize WhatsApp button when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWhatsAppButton);
} else {
    initWhatsAppButton();
}

// ===== BULK ORDER FORM SUBMISSION =====
function initBulkOrderForm() {
    const submitBtn = document.getElementById('submitInquiry');
    const dateInput = document.getElementById('deliveryDeadline');
    
    if (!submitBtn) return; // Only run on bulk-orders page
    
    // Make date picker open on any click within the field
    if (dateInput) {
        dateInput.addEventListener('click', function() {
            this.showPicker();
        });
    }
    
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get form values
        const yourName = document.getElementById('yourName').value.trim();
        const companyName = document.getElementById('companyName').value.trim();
        const userEmail = document.getElementById('userEmail').value.trim();
        const userPhone = document.getElementById('userPhone').value.trim();
        const orderType = document.getElementById('orderType').value;
        const estimatedQuantity = document.getElementById('estimatedQuantity').value;
        const deliveryDeadline = document.getElementById('deliveryDeadline').value;
        const projectDetails = document.getElementById('projectDetails').value.trim();
        
        // Validate required fields
        if (!yourName || !userEmail || !deliveryDeadline) {
            alert('Please fill in Your Name, Email, and Delivery Deadline fields');
            return;
        }
        
        // Check if it's a rush order (less than 2 days from today)
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set to beginning of day
        const deadline = new Date(deliveryDeadline);
        const diffTime = deadline - today;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        const isRushOrder = diffDays < 2;
        const rushOrderLabel = isRushOrder ? '� RUSH ORDER' : '';
        
        // Format the message
        const message = `${rushOrderLabel}
*New Bulk Order Inquiry*

*Personal Information:*
Name: ${yourName}
Company: ${companyName || 'N/A'}
Email: ${userEmail}
Phone: ${userPhone || 'N/A'}

*Order Details:*
Product Type: ${orderType}
Estimated Quantity: ${estimatedQuantity}
Delivery Deadline: ${deliveryDeadline}
${isRushOrder ? '⚠️ RUSH ORDER - Delivery needed within 2 days\n' : ''}

*Project Description:*
${projectDetails || 'No additional details'}

---
Sent from FunKustoms Bulk Orders Page`;
        
        // Encode message for WhatsApp URL
        const encodedMessage = encodeURIComponent(message);
        
        // Create WhatsApp link and open
        const whatsappURL = `https://wa.me/918237603202?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    });
}

// Initialize form handler when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBulkOrderForm);
} else {
    initBulkOrderForm();
}

console.log('FunKustoms website loaded successfully!');
