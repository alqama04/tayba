import w1 from '../../media/images/services/w1.jpg'
import w2 from '../../media/images/services/w2.jpg'
import w3 from '../../media/images/services/w3.jpg'
import w4 from '../../media/images/services/w4.jpg'

import h1 from '../../media/images/services/hair/h1.jpg'
import h2 from '../../media/images/services/hair/h2.jpg'
import h3 from '../../media/images/services/hair/messy side sweep.jpg'
import h4 from '../../media/images/services/hair/retro.jpg'
import h5 from '../../media/images/services/hair/Braids.jpg'

import n1 from '../../media/images/services/n.jpg'
import n2 from '../../media/images/services/n2.jpg'
import n3 from '../../media/images/makeup img/nailArt.png'
import n4 from '../../media/images/services/n3.jpg'

const servicesObj = {
    wedding: {
        "name": "wedding makeUp",
        "description": <p>Wedding period is the most important day in a brides life. All the dreams which she thoughts
            in her mind regarding her marriage are going to fulfil. So, on this day she has to look far beyond gorgeous
            just like a princess! The most important part of the wedding is the bridal makeup. <br />
            Bridal makeup is no easy deal. Two things need to be on point to make sure to get a bride’s makeup perfect.
            Firstly, the bride should be happy from inside, so that the natural glow is visible and when the makeup
            is applied then the face can be more vibrant and beautiful. . Secondly, the makeup itself should be done by the
            professional who understands what suits the bride best. <br />
        </p>,
        "image": [w1, w2, w3, w4]
    },
    hairServices: {
        "name": "Hair services",
        "description": <p>Your hairs are your crowning glory and to add more charm to your looks, try out any of these styling options
            that will be superb in every possible way.<br />For a bride, a total perfection is what everybody desires in their wedding. Yes,
            this is about a perfect dress, jewellery and of course the hairstyle.
        </p>,
        "image": [h4, h2, h1, h3, h5]
    },
    nail: {
        "name": "Nails",
        "description": <p>Nail art is a creative way to paint, decorate, enhance, and embellish nails. It is a type of artwork that can be
            done on fingernails and toenails, usually after manicures or pedicures. Manicures and pedicures are beauty treatments that trim, shape,
            and polish the nails. <br />
            Nail art is also a way to create your own identity through fashion, colors, and shapes. It also represents one's entry into the teenage or
            adult world leaving the influence of their parents to create their own identity. Nail Art is a creative way to embellish, paint, decorate,
            enhance the nails.
        </p>,
        "image": [n1, n2, n3,n4]
    },
    skin: {
        "name": "Skin",
        "description": <p> An esthetician, or skin care specialist, provides services geared toward improving the external appearance of your skin. 
        
        </p>,
        "image": [h1, h2, h3,]
    },
}


export default servicesObj