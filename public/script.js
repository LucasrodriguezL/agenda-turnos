document.addEventListener("DOMContentLoaded", () => {
    const turnosContainer = document.getElementById("turnos-container");

    // Simulación de turnos disponibles
    const turnos = [
        { hora: "10:00 AM", disponible: true },
        { hora: "11:00 AM", disponible: false },
        { hora: "12:00 PM", disponible: true },
        { hora: "01:00 PM", disponible: true },
        { hora: "02:00 PM", disponible: false },
        { hora: "03:00 PM", disponible: true }
    ];

    turnos.forEach(turno => {
        const turnoDiv = document.createElement("div");
        turnoDiv.classList.add("turno");
        turnoDiv.textContent = turno.hora;

        if (!turno.disponible) {
            turnoDiv.style.backgroundColor = "#ccc";
            turnoDiv.style.cursor = "not-allowed";
        } else {
            turnoDiv.addEventListener("click", () => {
                alert(`Has seleccionado el turno de ${turno.hora}`);
            });
        }

        turnosContainer.appendChild(turnoDiv);
    });
});
