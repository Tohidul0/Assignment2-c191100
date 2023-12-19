import React from 'react';


 function Header(props) {
    return (
            
<div className="bg-gradient-to-r from-violet-400 to-violet-600">
    <div className="bg-violet-700/30 py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 text-white">
            <h2 className="flex items-center italic">
            <img src="public/logo.svg" height="40" width="40" />
            <span>Budget App</span>
            </h2>
            <div className="flex items-center gap-4">
                <h2>Tohidul Alam</h2>
                <a href="#" className="undeline text-sm text-white/50">
                Sign Out
                </a>
            </div>
        </div>
    </div>
        <div className="mx-auto max-w-sm px-5 py-8 text-center text-white">
            <div>
                <h2>Available Budget</h2>
                <p className="mt-1 text-4xl font-medium">
                    + BDT <span id="available-amount">14,340.00</span>
                </p>
            </div>
            <div className="mt-4 flex items-center justify-between bg-green-500 px-4 py-3 text-sm">
                <p>Income</p>
                <p>
                + BDT <span id="total-income">3,391.45</span>
                </p>
            </div>
            <div className="mt-2 flex items-center justify-between bg-red-500 px-4 py-3 text-sm">
                <span>Expenses</span>
                <p>
                - BDT <span id="total-expence">3,391.45</span>
                </p>
            </div>
    </div>
</div>


      







        
    );
}

export default Header;