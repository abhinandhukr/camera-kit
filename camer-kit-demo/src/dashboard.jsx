import React, { useEffect , useState} from 'react';
import Chart from 'chart.js/auto';
import './dashboard.css';
import { bootstrapCameraKit } from "@snap/camera-kit";
import Camera from './camera';
import Modal from './Modal';

const Dashboard = () => {

    const [showModal, setShowModal] = useState(false);
    const [showCamera, setShowCamera] = useState(false);


    const openModal = () => {
        setShowModal(true);
        setShowCamera(true); // Enable Camera when opening the modal
      };
    
      const closeModal = () => {
        setShowModal(false);
        setShowCamera(false); // Disable Camera when closing the modal
      };
  
  useEffect(() => {
   
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    new Chart(ctxLine, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Sample Line Data',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Doughnut Charts for Share Class and Investors
    const setupDoughnutChart = (canvasId, labels, label, data, backgroundColors, borderColors) => {
      const ctx = document.getElementById(canvasId).getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            label: label,
            data: data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    };

    setupDoughnutChart('shareclasschart', ['share class 1', 'share class 2', 'share class 3', 'share class 4', 'share class 5'],
      'Share Class Ownership', [12, 19, 5, 2, 3], 
      ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
      ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)']);

    setupDoughnutChart('investorsChart', ['Investor 1', 'Investor 2', 'Investor 3', 'Investor 4', 'Investor 5'],
      'Top 5 Investors', [12, 19, 5, 2, 3], 
      ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
      ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)']);
  }, []);

  return (
    <div className="bg-gray-100 dashboard">
       <div class="container">
        <div class="row">
            <div class="col-span-3 p-6 bg-white rounded-lg shadow-md full-width">
                <div class="flex justify-between items-start mb-6">
                    <h2 class="text-lg font-semibold">CapTable Overview</h2>
                    <i class="fas fa-cog text-gray-400"></i>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="p-4 rounded-lg bg-purple-100">
                        <div class="flex items-center">
                            <i class="fas fa-users text-purple-600 text-2xl"></i>
                            <div class="ml-6">
                                <p class="text-sm font-medium text-purple-600">Investors</p>
                                <p class="text-lg font-semibold">12</p>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 rounded-lg bg-green-100">
                        <div class="flex items-center">
                            <i class="fas fa-users text-green-600 text-2xl"></i>
                            <div class="ml-6">
                                <p class="text-sm font-medium text-purple-600">Fully Diluted Shares</p>
                                <p class="text-lg font-semibold">65028</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 rounded-lg bg-orange-100">
                        <div class="flex items-center">
                            <i class="fas fa-users text-orange-600 text-2xl"></i>
                            <div class="ml-6">
                                <p class="text-sm font-medium text-purple-600">Total Cash recieved</p>
                                <p class="text-lg font-semibold">$ 68.48 M</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 rounded-lg bg-pink-100">
                        <div class="flex items-center">
                            <i class="fas fa-users text-pink-600 text-2xl"></i>
                            <div class="ml-6">
                                <p class="text-sm font-medium text-purple-600">Current Valuation</p>
                                <p class="text-lg font-semibold">$ 263.82 M</p>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 rounded-lg bg-purple-100">
                        <div class="flex items-center">
                            <i class="fas fa-users text-purple-600 text-2xl"></i>
                            <div class="ml-6">
                                <p class="text-sm font-medium text-purple-600">Investors</p>
                                <p class="text-lg font-semibold">12</p>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 rounded-lg bg-green-100">
                        <div class="flex items-center">
                            <i class="fas fa-users text-green-600 text-2xl"></i>
                            <div class="ml-6">
                                <p class="text-sm font-medium text-purple-600">Fully Diluted Shares</p>
                                <p class="text-lg font-semibold">65028</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 rounded-lg bg-orange-100">
                        <div class="flex items-center">
                            <i class="fas fa-users text-orange-600 text-2xl"></i>
                            <div class="ml-6">
                                <p class="text-sm font-medium text-purple-600">Total Cash recieved</p>
                                <p class="text-lg font-semibold">$ 68.48 M</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 rounded-lg bg-pink-100">
                        <div class="flex items-center">
                            <i class="fas fa-users text-pink-600 text-2xl"></i>
                            <div class="ml-6">
                                <p class="text-sm font-medium text-purple-600">Current Valuation</p>
                                <p class="text-lg font-semibold">$ 263.82 M</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-span-5 p-6 bg-white rounded-lg shadow-md half-width">
                <div class="flex justify-between items-start mb-6">
                    <h2 class="text-lg font-semibold">Start-x journey so far</h2>
                    <i class="fas fa-cog text-gray-400"></i>
                </div>
                <div>
                     <div class="p-6 bg-white rounded-lg shadow-md half-width">
                        <canvas id="lineChart"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-span-2 p-6 bg-white rounded-lg shadow-md half-width">
                <div class="flex justify-between items-center mb-3">
                    <h2 class="text-lg font-semibold">Share Class Ownership</h2>
                    <i class="fas fa-cog text-gray-400"></i>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md full-width">
                    <canvas id="shareclasschart"></canvas>
                </div>

            </div>

            <div class="col-span-1 p-6 bg-white rounded-lg shadow-md half-width">
                <div class="flex justify-between items-center mb-3">
                    <h2 class="text-lg font-semibold">Top 5 Investors</h2>
                    <i class="fas fa-cog text-gray-400"></i>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md full-width">
                    <canvas id="investorsChart"></canvas>
                </div>
            </div>

            <div class="col-span-5 p-6 bg-white rounded-lg shadow-md full-width">
                <div class="flex justify-between items-start mb-6">
                    <h2 class="text-lg font-semibold">Overview of funding rounds</h2>
                    <i class="fas fa-cog text-gray-400"></i>
                </div>
                <div class="overflow-x-auto">
                    <table class="min-w-full">
                        <thead>
                            <tr class="border-b">
                                <th class="text-left p-4">Funding Rounds</th>
                                <th class="text-left p-4">Transaction Date</th>
                                <th class="text-left p-4">Price Per Share</th>
                                <th class="text-left p-4">Cash Raised</th>
                                <th class="text-left p-4">Post Money Valuation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b">
                                <td class="p-4">Series C CCPS</td>
                                <td class="p-4">Jul 5, 2019</td>
                                <td class="p-4">$4,057.00</td>
                                <td class="p-4">$28.49 M</td>
                                <td class="p-4">$255.70 M</td>
                            </tr>
                            <tr class="border-b">
                                <td class="p-4">Series C CCPS</td>
                                <td class="p-4">Jul 5, 2019</td>
                                <td class="p-4">$4,057.00</td>
                                <td class="p-4">$28.49 M</td>
                                <td class="p-4">$255.70 M</td>
                            </tr>
                            <tr class="border-b">
                                <td class="p-4">Series C CCPS</td>
                                <td class="p-4">Jul 5, 2019</td>
                                <td class="p-4">$4,057.00</td>
                                <td class="p-4">$28.49 M</td>
                                <td class="p-4">$255.70 M</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    {/* ... rest of your dashboard content ... */}

    {/* Modal Trigger Button */}
    <button className="open-modal-button" onClick={openModal}>
      Open Modal
    </button>

    {/* Modal Component */}
    {showModal && <Modal showCamera={showCamera} handleClose={closeModal} />}
    </div>
  );
};

export default Dashboard;
