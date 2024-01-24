import {FC, useState} from 'react';
import AppWrapper from '../components/AppWrapper';
import { HeaderSections } from '../types/globalTypes';
import '../styles/Exercise3.scss';
import Pipi from '../../public/Pipi.svg';
import Box from '../components/Box';
import HintBox from '../components/HintBox';
import Grid from '../components/Grid';
import NavButtons from '../components/NavButtons';




const Exercise3: FC = () => {
    const [confetti, setConfetti] = useState(false);
    const nums = Array.from({length:24}, (_, index)=>index+1);
    const itemSpace = [1, 3, 1, 3, 2, 4, 2, 1, 1, 2, 1, 2, 1];
    const selectedValue = "";
    return(
        <>
            <AppWrapper section={HeaderSections.EXERCISE_3}>
                <div className="page-wrapper">
                    <h1>Exercise 3</h1>
                    <p>
                    For this exercise, you will be helping Pipi 
                    find the basketball that was stored in the 
                    last lesson and replacing it with a soccer ball.
                    </p>
                    <h2>Instructions</h2>
                    <p>
                        Take PiPi to{' '}
                        <span className="highlight">Box I</span>
                        {' '}by clicking on the correct address.
                    </p>
                    <HintBox text=""/>
                    <div className="wrap">       
                        <div className="Exercise-box">
                            <Grid 
                                addressNums={nums}
                                itemSpaceArray={itemSpace}
                                size={40}
                                handleCorrect={setConfetti}
                            >
                                <div></div>
                               <Box letter="j" num={3} conf={false}></Box>
                                <div></div>
                                <Box letter="k" num={3} conf={false}></Box>
                                <div></div>
                                <Box letter="l" num={4} conf={confetti}></Box>
                                <div></div>
                                <Box letter="m" num={1} conf={false}></Box>
                                <div></div>
                                <Box letter="n" num={2} conf={false}></Box>
                                <div></div>
                                <Box letter="o" num={3} conf={false}></Box>
                            </Grid>
                        </div>
                        <img 
                            className="pipi" 
                            src={Pipi} 
                            alt="Pipi" 
                            style={{ 
                                position: 'absolute', 
                                top: '620px', // Adjust as needed
                                left: '165px', // Adjust as needed
                                height: '150px', // Set desired height
                                width: 'auto', // Maintain aspect ratio
                                zIndex: 2
                            }} 
                        />
                    </div>
                    <h3>
                    Pipi now wants to replace the basketball with a soccer ball. 
                    What is the corresponding code to do this?
                    </h3>
                    <div className="frame">
                        <p className='text1'>
                        SoccerBall soccerBall; // ignore the type difference here
                        </p>
                        <select
                            id="sampleDropdown"
                            className="button"
                            value={selectedValue}
                            //onChange={handleChange}
                        >
                            <option value="" disabled selected>Select</option>
                            <option value="option2">*basketballPtr = soccerBall;</option>
                            <option value="option3">basketballPtr = soccerBall;</option>
                            <option value="option4">basketballPtr = &soccerBall;</option>
                            <option value="option5">&basketballPtr = soccerBall;</option>
                        </select>
                    </div>     
                    <div className='padding'></div>           
                </div>
            </AppWrapper>
            <NavButtons page={15}></NavButtons>
        </>
    )
}

export default Exercise3;