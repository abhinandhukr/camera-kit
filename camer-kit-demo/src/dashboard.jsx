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
        window.location.reload();
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

    <button className="open-modal-button group flex items-center justify-center p-2 bg-violet-500 text-white rounded-md relative z-10" onClick={openModal}>
    <svg className="ml-2 mr-2" width="15" height="15" viewBox="0 0 100 100">
        {/* Arrow icon */}
        <path d="M10 50 L90 50 M70 30 L90 50 L70 70" stroke="white" strokeWidth="8"/>
    </svg>
    Experience 
    
<svg width="50" height="30" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M94.433 536.378c49.818-67.226 110.761-124.854 180.172-166.808 35.333-21.356 62.64-33.686 99.016-45.698 17.076-5.638 34.511-10.135 52.088-13.898 23.033-4.932 28.596-5.483 49.577-7.228 76.233-6.333 138.449 4.648 210.869 33.643 3.581 1.435 10.361 4.513 18.987 8.594 8.488 4.013 16.816 8.358 25.086 12.801 18.349 9.861 36.004 20.974 53.173 32.756 31.245 21.442 62.37 49.184 91.227 79.147 20.218 20.991 39.395 43.706 56.427 66.689 14.436 19.479 38.301 29.282 60.985 15.991 19.248-11.276 30.491-41.417 15.991-60.984-101.194-136.555-243.302-247.3-415.205-272.778-165.834-24.575-325.153 31.855-452.148 138.262-46.849 39.252-86.915 85.525-123.221 134.518-14.5 19.567-3.258 49.708 15.991 60.984 22.685 13.291 46.549 3.488 60.985-15.991z" fill="#4A5699" /><path d="M931.055 491.378c-49.817 67.228-110.761 124.856-180.173 166.811-35.332 21.354-62.639 33.684-99.015 45.694-17.076 5.641-34.512 10.137-52.09 13.902-23.032 4.931-28.593 5.48-49.576 7.225-76.233 6.336-138.449-4.648-210.869-33.642-3.582-1.436-10.362-4.514-18.987-8.595-8.488-4.015-16.816-8.357-25.087-12.801-18.348-9.862-36.003-20.974-53.172-32.755-31.245-21.443-62.37-49.184-91.227-79.149-20.218-20.99-39.395-43.705-56.427-66.69-14.436-19.479-38.3-29.279-60.985-15.991-19.249 11.276-30.491 41.419-15.991 60.984C118.65 672.929 260.76 783.677 432.661 809.15c165.834 24.578 325.152-31.854 452.148-138.259 46.85-39.256 86.915-85.528 123.222-134.521 14.5-19.564 3.257-49.708-15.991-60.984-22.685-13.287-46.55-3.487-60.985 15.992z" fill="#C45FA0" /><path d="M594.746 519.234c0.03 46.266-34.587 83.401-80.113 85.188-46.243 1.814-83.453-35.93-85.188-80.11-0.953-24.271-19.555-44.574-44.574-44.574-23.577 0-45.527 20.281-44.573 44.574 3.705 94.378 79.154 169.32 174.334 169.258 94.457-0.063 169.321-81.897 169.261-174.335-0.039-57.486-89.184-57.49-89.147-0.001z" fill="#F39A2B" /><path d="M430.688 514.818c0.876-45.416 37.262-81.797 82.677-82.672 45.438-0.875 81.824 38.571 82.673 82.672 1.105 57.413 90.256 57.521 89.147 0-1.827-94.791-77.028-169.994-171.82-171.82-94.787-1.827-170.049 79.785-171.824 171.82-1.108 57.522 88.04 57.413 89.147 0z" fill="#E5594F" /></svg>

<span className="tagline group-hover:block hidden absolute top-full left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-1 rounded-md z-20 mt-2">QapVision: Earn, Explore and Experience Equity in a New Dimension</span>
</button>







    {showModal && <Modal showCamera={showCamera} handleClose={closeModal} />}
    </div>
  );
};

export default Dashboard;
