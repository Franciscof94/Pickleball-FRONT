import { FC, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Carousel } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import useWindowDimensions from '../../hooks/useResize';
import { selectUi, setStepNumber } from '../../store/features/uiSlice';
import { FirstCancelStep } from './FirstCancelStep';
import { SecondCancelStep } from './SecondCancelStep';
import { ThirdCancelStep } from './ThirdCancelStep';

interface Props {
    onHandleSubmit: (data: any) => void
}


export const StepCancelContainer: FC<Props> = ({ onHandleSubmit }) => {
    const dispatch = useAppDispatch()
    const ref = useRef<any>(null);
    const { stepNumber } = useAppSelector(selectUi)
    const { width } = useWindowDimensions()

    const handleSelect = (selectedIndex: number) => {
        dispatch(setStepNumber(selectedIndex))
    };

    const onPrevClick = () => {
        ref.current.prev();
    };
    const onNextClick = () => {
        ref.current.next();
    };

    return (
        <AnimatePresence>
            <Carousel
                ref={ref}
                interval={null}
                touch={false}
                onSelect={handleSelect}
                indicators={width!! >= 768 ? true : false}
            >
                <Carousel.Item>
                    <motion.div
                        key={stepNumber}
                        initial={{ y: 1, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -1, opacity: 0 }}
                        transition={{ duration: 2.5 }}
                    >
                        <FirstCancelStep onNextClick={onNextClick} />
                    </motion.div>
                </Carousel.Item>
                <Carousel.Item>
                    <motion.div
                        key={stepNumber}
                        initial={{ y: 1, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -1, opacity: 0 }}
                        transition={{ duration: 2.5 }}
                    >
                        <SecondCancelStep onNextClick={onNextClick} onPrevClick={onPrevClick} onHandleSubmit={onHandleSubmit} />
                    </motion.div>
                </Carousel.Item>
                <Carousel.Item>
                    <motion.div
                        key={stepNumber}
                        initial={{ y: 1, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -1, opacity: 0 }}
                        transition={{ duration: 2.5 }}
                    >
                        <ThirdCancelStep onPrevClick={onPrevClick} />
                    </motion.div>
                </Carousel.Item>
            </Carousel>
        </AnimatePresence>
    )
}