document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // CREATE MAP
    // =========================

    const map = L.map('tourMap').setView([14.5995, 121.0], 7);

    // =========================
    // TILE LAYER
    // =========================

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // =========================
    // LOCATIONS + ITINERARY
    // =========================

    const locations = [

        {
            name: "Zamboanga (Start & End Point)",
            coords: [6.9214, 122.0790],
            day: "Travel Day",
            details: "Departure and return point of the educational tour."
        },

        {
            name: "Manila (Main NCR Stay)",
            coords: [14.5995, 120.9842],
            day: "Day 1",
            details: "Arrival and orientation activities in Manila."
        },

        {
            name: "Quezon City",
            coords: [14.6760, 121.0437],
            day: "Day 2",
            details: "Visited Hypertech in Quezon City."
        },

        {
            name: "Makati",
            coords: [14.5547, 121.0244],
            day: "Day 2",
            details: "Visited OpenText in Makati."
        },

        {
            name: "Pasay",
            coords: [14.5378, 120.9876],
            day: "Day 3",
            details: "Visited MMDS in Pasay."
        },

        {
            name: "Taguig",
            coords: [14.5176, 121.0509],
            day: "Day 3",
            details: "Visited TP (Teleperformance) in Taguig."
        },

        {
            name: "Manila Tech Visits",
            coords: [14.5995, 120.9842],
            day: "Day 4",
            details: "Visited Top Peg and Microsourcing."
        },

        {
            name: "Tagaytay",
            coords: [14.1153, 120.9621],
            day: "Day 5",
            details: "Educational tour and sightseeing in Tagaytay."
        },

        {
            name: "Baguio",
            coords: [16.4023, 120.5960],
            day: "Day 6–7",
            details: "Tour activities and exploration in Baguio City."
        },

        {
            name: "NAIA Airport",
            coords: [14.5086, 121.0198],
            day: "Departure",
            details: "Flight back to Zamboanga."
        }

    ];

    // =========================
    // MARKERS
    // =========================

    locations.forEach(location => {

        const marker = L.marker(location.coords).addTo(map);

        marker.bindPopup(`
            <div style="text-align:left; max-width:220px;">

                <h3 style="margin:0;color:#38bdf8;">
                    ${location.name}
                </h3>

                <p style="margin:5px 0;font-weight:bold;color:#ffffff;">
                    ${location.day}
                </p>

                <p style="margin:5px 0;color:#cbd5e1;font-size:0.85rem;">
                    ${location.details}
                </p>

            </div>
        `);

        marker.on('click', function () {

            map.setView(location.coords, 11, {
                animate: true
            });

            marker.openPopup();

        });

    });

});