document.getElementById('fetchDataButton').addEventListener('click', async () => {
    const flightId = document.getElementById('flightIdInput').value;
    const response = await fetch(`http://localhost:3000/flights/${flightId}/passengers`);
    const data = await response.json();

    const flightDataDiv = document.getElementById('flightData');
    if (data.code === 200) {
        const table = createFlightDataTable(data.data);
        flightDataDiv.innerHTML = '';
        flightDataDiv.appendChild(table);
    } else {
        flightDataDiv.innerHTML = 'No data found';
    }
});

function createFlightDataTable(flightData) {
    const table = document.createElement('table');
    table.classList.add('flight-data-table');

    const headerRow = document.createElement('tr');
    const headers = ['Passenger ID', 'DNI', 'Name', 'Age', 'Country', 'Boarding Pass ID', 'Purchase ID', 'Seat Type ID', 'Seat ID'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    flightData.passengers.forEach(passenger => {
        const row = document.createElement('tr');

        const dataKeys = ['passengerId', 'dni', 'name', 'age', 'country', 'boardingPassId', 'purchaseId', 'seatTypeId', 'seatId'];
        dataKeys.forEach(key => {
            const td = document.createElement('td');
            td.textContent = passenger[key];
            row.appendChild(td);
        });

        table.appendChild(row);
    });

    return table;
}
