import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import './app.css';

const App = () => {
    const activeMenu = true;

    return (
        <div>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>App</div>
                <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }} >
                    <TooltipComponent content="Settings" position="Top">
                        <button type="button"
                            className='text-3xl p-3
                        hover:drop-shadow-xl
                        hover:bg-light-gray text-white'
                            // when closer to finish, this style will be dynamic, will be done is css file.
                            style={{
                                background: 'blue',
                                borderRadius: '50%'
                            }}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                    {activeMenu ? (
                        <div className='w-72 fixed sidebar
                        dark:bg-secondary-dark-bg
                        bg-white'>
                            Sidebar
                        </div>
                    ) : (
                        <div className='w-0
                        dark:bg-secondary-dark-bg'>
                        Sidebar w-0
                        </div>

                    )}
                </div>
            </BrowserRouter>

        </div>

    )
}

export default App