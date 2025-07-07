document.addEventListener('DOMContentLoaded', function() {
    // Get all action buttons
    const likeButtons = document.querySelectorAll('.like-btn');
    const commentButtons = document.querySelectorAll('.comment-btn');
    const shareButtons = document.querySelectorAll('.share-btn');

    // Like button functionality
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const likesCount = this.closest('.post').querySelector('.likes-count');
            
            if (this.classList.contains('liked')) {
                // Unlike
                this.classList.remove('liked');
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.color = '#666';
                
                // Decrease like count
                let currentLikes = parseInt(likesCount.textContent);
                likesCount.textContent = `${currentLikes - 1} likes`;
            } else {
                // Like
                this.classList.add('liked');
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.color = '#e74c3c';
                
                // Increase like count
                let currentLikes = parseInt(likesCount.textContent);
                likesCount.textContent = `${currentLikes + 1} likes`;
            }
        });
    });

    // Comment button functionality
    commentButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Simple alert for demo - in real app, this would open a comment modal
            alert('Comment functionality would open here! 💬');
        });
    });

    // Share button functionality
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Simple share functionality
            if (navigator.share) {
                navigator.share({
                    title: 'Check out this post!',
                    text: 'Amazing post from Social Feed',
                    url: window.location.href
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                const url = window.location.href;
                navigator.clipboard.writeText(url).then(() => {
                    alert('Link copied to clipboard! 📋');
                }).catch(() => {
                    alert('Share functionality - Link: ' + url);
                });
            }
        });
    });

    // Add smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/500x300?text=Image+Not+Found';
            this.alt = 'Image not found';
        });
    });

    // Add hover effects for posts
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        post.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        post.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click animation to profile pictures
    const profilePics = document.querySelectorAll('.profile-pic');
    profilePics.forEach(pic => {
        pic.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    console.log('Social Media Post Design loaded successfully! 🎉');
}); 