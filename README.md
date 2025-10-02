# 🚀 12-Hour Hackathon - Problem Statements Website

A beautiful, interactive website to display hackathon problem statements in an engaging and visually appealing way.

## ✨ Features

- **🎨 Modern Design**: Gradient backgrounds, smooth animations, and glassmorphism effects
- **⏰ Live Countdown Timer**: Real-time 12-hour countdown timer
- **📱 Fully Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- **🎯 4 Problem Statements**: Clearly organized and beautifully presented
- **💫 Interactive Elements**: 
  - Smooth scroll animations
  - Hover effects on cards
  - Click-to-copy tech stack tags
  - Parallax effects
  - Keyboard navigation (Arrow keys)
- **🎮 Easter Egg**: Try the Konami code! (↑ ↑ ↓ ↓ ← → ← → B A)

## 📋 Problem Statements Included

1. **🌱 Green Lifestyle & Finance Tracker** (Beginner Friendly)
   - Sustainability tracking with carbon footprint and financial savings
   
2. **📊 Placement Progress Tracker** (Intermediate)
   - Continuous student assessment system for better placements
   
3. **❤️ Elderly Care Assistant** (Intermediate)
   - AI companion for elderly with stress detection
   
4. **🤖 AI Call Intelligence** (Advanced)
   - Smart conversation transcription and analysis

## 🚀 Getting Started

### Quick Start

1. **Download the files** or clone this directory
2. **Open `index.html`** in any modern web browser
3. **That's it!** No build process or dependencies required

### File Structure

```
hackathon-problems/
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # Interactive features
└── README.md          # This file
```

## 🎯 How to Use

### For Participants

1. Open the website in your browser
2. Scroll through the 4 problem statements
3. Click on tech stack tags to copy them to clipboard
4. Choose your challenge and start building!

### For Organizers

1. **Customize the timer**: Edit the `startTimer()` function in `script.js`
2. **Update problem statements**: Modify the HTML content in `index.html`
3. **Change colors**: Update CSS variables in `style.css`:
   ```css
   :root {
       --primary: #6366f1;
       --secondary: #8b5cf6;
       --accent: #ec4899;
       /* ... */
   }
   ```
4. **Add more problems**: Copy a `.problem-card` div and update the content

## 💡 Interactive Features

### Keyboard Shortcuts
- **Arrow Down**: Scroll down
- **Arrow Up**: Scroll up
- **Konami Code**: ↑ ↑ ↓ ↓ ← → ← → B A (surprise!)

### Click Features
- **Tech Tags**: Click any technology tag to copy it to clipboard
- **Scroll Indicator**: Click the arrow to jump to problems section

## 🎨 Customization Guide

### Changing Difficulty Levels

In `style.css`, modify the difficulty classes:
```css
.difficulty.easy {
    background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%);
}
```

### Adding New Problem Statements

Copy this template and add it to `index.html`:

```html
<div class="problem-card" data-problem="5">
    <div class="problem-number">05</div>
    <div class="problem-content">
        <div class="problem-header">
            <h3>🎯 Your Problem Title</h3>
            <span class="difficulty easy">Difficulty Level</span>
        </div>
        <p class="tagline">Your tagline</p>
        <!-- Add your sections here -->
    </div>
</div>
```

## 🌐 Browser Compatibility

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🎭 Performance

- ⚡ Fast load time (< 1s)
- 🎨 Smooth 60fps animations
- 📦 No external dependencies
- 💾 Minimal file size

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern features (Grid, Flexbox, Animations)
- **Vanilla JavaScript**: No frameworks needed
- **Google Fonts**: Poppins font family

### CSS Features
- CSS Grid & Flexbox
- CSS Variables
- Keyframe Animations
- Media Queries
- Backdrop Filters
- Gradient Backgrounds

### JavaScript Features
- Intersection Observer API
- Clipboard API
- Event Delegation
- Smooth Scroll
- Performance Monitoring

## 🎓 Learning Resources

Each problem statement includes:
- **Background**: Context and motivation
- **Mission**: Clear objective
- **Vision**: Desired outcome
- **Goal**: Specific deliverables
- **Tech Stack**: Suggested technologies

## 📸 Screenshots

The website features:
- Hero section with animated countdown
- Color-coded problem cards
- Smooth scroll animations
- Interactive tech stack tags
- Responsive design for all devices

## 🐛 Troubleshooting

**Timer not working?**
- Check browser console for errors
- Ensure JavaScript is enabled

**Animations not smooth?**
- Try a different browser
- Check system performance settings

**Responsive issues?**
- Clear browser cache
- Use latest browser version

## 🤝 Contributing

Feel free to customize this website for your hackathon:
1. Fork or download the files
2. Make your changes
3. Test on multiple devices
4. Share with participants!

## 📄 License

Free to use for educational and hackathon purposes.

## 🎉 Credits

Created for the 12-hour hackathon on October 2, 2025.

### Problem Statements:
1. Green Lifestyle & Finance Tracker
2. Placement Progress Tracker
3. Elderly Care Assistant
4. AI Call Intelligence

---

## 🚀 Quick Commands

### Open in Browser
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

### Start Local Server (Optional)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with npx)
npx serve

# Then open: http://localhost:8000
```

---

**Happy Hacking! 🎯💻✨**

For questions or suggestions, reach out to your hackathon organizers!
