
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.innerHTML = navMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Hide product details if showing
                document.getElementById('productDetails').style.display = 'none';
                
                // Show target section
                targetElement.style.display = 'block';
                
                window.scrollTo({
                    top: targetElement.offsetTop - document.getElementById('header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Show/Hide Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
        
        // Change header style on scroll
        const header = document.getElementById('header');
        if (window.pageYOffset > 100) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Dropdown Menu for Mobile
    const dropdowns = document.querySelectorAll('.dropdown > a');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdownMenu = this.nextElementSibling;
                dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!e.target.matches('.dropdown > a') && !e.target.matches('.dropdown-menu a')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.style.display = 'none';
                });
            }
        }
    });
    


    // function showProductDetails(productId) {
    //     const product = productData[productId];
    //     if (!product) return;

    //     // Update product details
    //     document.getElementById('detailProductTitle').textContent = product.title;
    //     document.getElementById('detailProductId').textContent = `Product ID: ${product.id}`;
    //     document.getElementById('detailProductPrice').textContent = product.price;
    //     document.getElementById('detailProductDesc').textContent = product.description;
        
    //     // Update features list
    //     const featuresList = document.getElementById('detailProductFeatures');
    //     featuresList.innerHTML = '';
    //     product.features.forEach(feature => {
    //         const li = document.createElement('li');
    //         li.textContent = feature;
    //         featuresList.appendChild(li);
    //     });
        
    //     // Update images
    //     const mainImage = document.getElementById('mainImage');
    //     mainImage.src = product.images[0];
        
    //     const thumbnails = document.querySelectorAll('.thumbnail');
    //     product.images.forEach((img, index) => {
    //         if (thumbnails[index]) {
    //             thumbnails[index].src = img;
    //         }
    //     });
        
    //     // Hide all sections
    //     document.querySelectorAll('section').forEach(section => {
    //         section.style.display = 'none';
    //     });
        
    //     // Show product details section
    //     document.getElementById('productDetails').style.display = 'block';
        
    //     // Scroll to top
    //     window.scrollTo(0, 0);
    // }

    // Back to products functionality
    document.getElementById('backToProducts').addEventListener('click', function(e) {
        e.preventDefault();
        
        // Hide product details
        document.getElementById('productDetails').style.display = 'none';
        
        // Show products section
        document.getElementById('products').style.display = 'block';
        
        // Scroll to products
        window.scrollTo({
            top: document.getElementById('products').offsetTop - document.getElementById('header').offsetHeight,
            behavior: 'smooth'
        });
    });

    // Change product image when thumbnail clicked
    window.changeImage = function(newSrc) {
        document.getElementById('mainImage').src = newSrc;
    }

    // Set up click handlers for "View Details" buttons
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = this.getAttribute('data-product');
            showProductDetails(productId);
        });
    });

    // Set up click handler for "Wash Basins" links
    document.querySelectorAll('.wash-basins-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showProductDetails('ceramic-wash-basins');
        });
    });

    // Animation on Scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.about-img, .product-card, .feature-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animated elements
    document.querySelectorAll('.about-img, .product-card, .feature-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run animation check on scroll and load
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});




document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add background when scrolled
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show on scroll
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scroll down
            header.classList.add('hide-nav');
        } else if (currentScroll < lastScroll) {
            // Scroll up
            header.classList.remove('hide-nav');
        }
        
        lastScroll = currentScroll;
    });
});
