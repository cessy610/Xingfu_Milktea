window.onload = function () {
	
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        
        title:{
            text:"Popularity of Xingfú Milk Tea Flavors"
        },
        axisX:{
            
            tickThickness: 0,
            lineThickness: 0,
            labelFontSize: 20,
        },
        data: [{
            indexLabelFontSize: 20,
            toolTipContent: "<span style=\"color:#62C9C3\">{indexLabel}:</span> <span style=\"color:#1f831c\"><strong>{y}</strong></span>",
            indexLabelPlacement: "inside",
            indexLabelFontColor: "white",
            indexLabelFontWeight: 150,
            indexLabelFontFamily: "Segoe UI",
            type: "bar",
            name: "milktea",
            axisYType: "secondary",
            color: "#1f831c",
            dataPoints: [
                { y: 51.1, label: "51.1%" , indexLabel:"Taro Bubble Tea" },
                { y: 55.3, label: "55.3%", indexLabel:"Lychee Yogurt" },
                { y: 58.6, label: "58.6%", indexLabel:"Lemon with Yogurt" },
                { y: 60, label: "60%", indexLabel:"Choco Cheesecake Bubble Tea" },
                { y: 63, label: "63%", indexLabel:"Wintermelon 3 Musketeers" },
                { y: 65.4, label: "65.4%", indexLabel:"Choco Red Velvet Bubble Tea" },
                { y: 67, label: "67%", indexLabel:"Java Chips Bubble Tea" },
                { y: 69.8, label: "69.8%", indexLabel:"Passion Fruit Yogurt" },
                { y: 70, label: "70%", indexLabel:"Kumquat Lemon" },
                { y: 73, label: "73%", indexLabel:"Pure Lemon" },
                { y: 76.2, label: "76.2%", indexLabel:"Creamy Matcha Bubble Tea" },
                { y: 78, label: "78%", indexLabel:"Choco Cream Cheese Bubble Tea" },
                { y: 80.5, label: "80.5%", indexLabel:"Cookies and Cream Bubble Tea" },
                { y: 82, label: "82%", indexLabel:"Red Velvet Bubble Tea" },
                { y: 84, label: "84%", indexLabel:"Dark Choco Cream Cheese" },
                { y: 85.5, label: "85.5%", indexLabel:"Choco Taro Bubble Tea" },
                { y: 88, label: "88%", indexLabel:"Xingfú Bubble Tea" },
                { y: 99.9, label: "99.9%", indexLabel:"Okinawa 3 Musketeers" }
            ]
        }]
    });
    setTimeout(()=>{
        chart.render();
    }, 3000);
    
    
    }