// src/services/api.js

// Mock data to simulate API responses
const generateMockPatients = () => {
    const names = ['Zoe Normanvill', 'Kellie Stagg', 'Bertina Cottem', 'Diannemarie Goodge', 'Astrid Weighell', 'Selle Bedinham', 'Veda Tiffin', 'Elihu Patshull', 'Tess Caris', 'Emanuele Sobey', 'Josey Hamm', 'Norbie Stanbury'];
    const medicalIssues = ['Fever', 'Headache', 'Sore throat', 'Sprained ankle', 'Rash', 'Ear infection', 'Sinusitis'];
    const addresses = ['5 Moulton Hill', '30112 Esker Center', '83316 Buena Vista Alley', '57 Northport Pass', '36 Schmedeman Road', '5157 West ridge Terrace', '7142 Upham Pass', '3634 Merry Center'];
    
    return Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      name: names[index % names.length],
      age: Math.floor(Math.random() * 60) + 20,
      medical_issue: medicalIssues[Math.floor(Math.random() * medicalIssues.length)],
      address: addresses[index % addresses.length],
      phone_number: `${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
      email: `${names[index % names.length].toLowerCase().replace(' ', '.')}@email.com`,
      image: `https://i.pravatar.cc/40?img=${(index % 20) + 1}`
    }));
};

// Simulate an async API call to fetch patients
export const fetchPatients = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(generateMockPatients());
        }, 1000); // 1-second delay to simulate network latency
    });
};