import {useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';

export function useOrientation() {
    
  const [orientation, setOrientation] = useState(true);

  useEffect(() => {
    useWindowDimensions.addEventListener('change', ({window:{width,height}})=>{
      if (width<height) {
        setOrientation(true)
      } else {
        setOrientation(false)
    
      }
    })

  }, []);

  return orientation;
}