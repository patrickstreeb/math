const topline = document.querySelectorAll('.topline');
let totalpoint=0;
topline.forEach(topline => {
    let points = parseInt(topline.getAttribute('data-points'));
    if (!isNaN(points)) {
    totalpoint += points;
    
    }
    module.exports = totalpoint;
});