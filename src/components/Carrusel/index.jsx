import React, {useEffect, useState} from "react";
import Glide from '@glidejs/glide';
import "./styles.css"

const Carousel = ({classN = 'glide', config, children}) => {
    const [slider] = useState(new Glide(`.${classN}`, config))
    useEffect(() => {
       slider.mount()

      slider.on('run.before', (event) => {
          // ... do something cool here
        })

      // cleanup when unmounting component
      return () => slider.destroy()
    }, [])

   return (
      <div className={classN}>
           <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">
                    {children.map((slide, index) => {
                            return React.cloneElement(slide, {
                                key: index,
                                className: `${slide.props.className} glide__slide`
                            })
                        })
                    }
                </ul>

                <div className="glide__bullets" data-glide-el="controls[nav]">
                  <button className="glide__bullet" data-glide-dir="=0"></button>
                  <button className="glide__bullet" data-glide-dir="=1"></button>
                  <button className="glide__bullet" data-glide-dir="=2"></button>
                </div>
           </div>
      </div>
  )
}

export default Carousel