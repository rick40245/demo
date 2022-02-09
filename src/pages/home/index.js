import React  from 'react';
import List from './components/documents';
import Summary from './components/summary';
import HomeSearch from '../../components/search-bar/home-page-search'

import './index.scss'

export default function Home(props) {

    return (
        <>
            <div className='home-page'>
                <div className='home-page-search-area'>
                    <div className='home-page-title-wrapper'>
                        <h1 className='home-page-search-area-title'></h1>
                        <span></span>
                    </div>
                    <HomeSearch />
                </div>

                <div className='content-container'>
                    <div className='summary-flow'>
                        <div className='homepage-name'>
                            <div>
                                <h1 className='homepage-subtitle'>
                                    <span className='homepage-subtitle-little'>Summary</span>
                                </h1>
                            </div>
                            <div className="components-tutorial">
                                <p></p>
                            </div>
                        </div>
                        <Summary
                            subject=""
                            instruction=""
                            left_number="8"
                            right_number1="20"
                            right_number2="6"
                        />
                        <Summary
                            subject=""
                            instruction=""
                            left_number="29"
                            right_number1="20"
                            right_number2="6"
                        />
                        <Summary
                            subject=""
                            instruction=""
                            left_number="31"
                            right_number1="20"
                            right_number2="6"
                        />
                        <Summary
                            subject=""
                            instruction=""
                            left_number="7"
                            right_number1="20"
                            right_number2="6"
                        />
                    </div>
                    <div>
                        <div className='homepage-name'>
                            <h1 className='homepage-subtitle'>相關文件
                                <span className='homepage-subtitle-little'>Documents</span>
                            </h1>
                        </div>
                        <List subject="" en="Process" />
                        <List subject="" en="Policy" />
                        <List subject="" en="Guidance" />
                    </div>
                </div>

            </div>
        </>
    )
}