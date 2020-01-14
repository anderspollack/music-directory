import React from 'react';

import SearchBar from '../components/SearchBar';
import WhatIsThis from '../components/WhatIsThis';

const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-column w-100 pa3 ph3 ph5-ns tc-m items-center justify-center h-100">
            <div>
                <div>
                    <div className="h-25 f1 pb5 1h-title flex items-center justify-center">
                        music-directory
                    </div>
                    <div className="relative">
                        <SearchBar />
                    </div>
                    <div className="h-25">
                        <WhatIsThis />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;