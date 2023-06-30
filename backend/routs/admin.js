// Get a reference to the sidebar element
var sidebar = document.getElementById("sidebar");

// Function to open the sidebar
function openSidebar() {
    if (!sidebar.classList.contains("sidebar_responsive")) {
        sidebar.classList.add("sidebar_responsive");
    }
}

// Function to close the sidebar
function closeSidebar() {
    if (sidebar.classList.contains("sidebar_responsive")) {
        sidebar.classList.remove("sidebar_responsive");
    }
}

//charts
// Bar chart for top 5 products
var optionsBar = {
    chart: {
        type: 'bar'
    },
    series: [{
        data: [30, 40, 45, 50, 49]
    }],
    xaxis: {
        categories: ['footvolly-ball', 'Product 2', 'Product 3', 'Product 4', 'Product 5']
    }
}

var barChart = new ApexCharts(document.querySelector("#bar-chart"), optionsBar);
barChart.render();

// Area chart for Purchase and Sales Orders
var optionsArea = {
    chart: {
        type: 'area'
    },
    series: [{
        name: 'Sales',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
    }, {
        name: 'Purchase',
        data: [23, 31, 35, 51, 49, 62, 68, 91, 148]
    }],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
}

var areaChart = new ApexCharts(document.querySelector("#area-chart"), optionsArea);
areaChart.render();