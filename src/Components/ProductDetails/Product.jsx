import img1 from '../../assets/Imges/model_1.jpg';
import img2 from '../../assets/Imges/model_2.jpg';
import img3 from '../../assets/Imges/lipstick.jpg';
import imgTitle1 from '../../assets/Imges/m-h-slider-img-2.png';
import imgTitle2 from '../../assets/Imges/m-h-slider-img-6.png';
import { IoPlaySharp } from 'react-icons/io5'; // Import the IoPlaySharp icon
const last = [
    {
      img:'./src/assets/Imges/fWomen_1.jpg'
    },
    {
      img:'./src/assets/Imges/fimg2.jpg'
    },
    {
      img:'./src/assets/Imges/women3.jpg'
    },
    {
      img:'./src/assets/Imges/rose.jpg'
    },
    {
      img:'./src/assets/Imges/blackwomen.jpg'
    },
    {
      img:'./src/assets/Imges/f-roge.jpg'
    },
    {
      img:'./src/assets/Imges/maskara.jpg'
    },
    {
      img:'./src/assets/Imges/fineimg2.jpg'
    },
    {
      img:'./src/assets/Imges/brush.jpg'
    },
    {
      img:'./src/assets/Imges/women5.jpg'
    },
    {
      img:'./src/assets/Imges/shadow.jpg'
    },
    {
      img:'./src/assets/Imges/lastwomen.jpg'
    },
  ];
  
  const slides = [
    {
      imgSrc: img1,
      imgTitle: imgTitle1,
      title: 'INFINITE BEAUTY',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiisSlider3 praesentium voluptatum deleniti atque corrupti quos dolores te quas',
      color: '#FFFFFF',
      color2: '#000',
      a: "VIEW MORE"
    },
    {
      imgSrc: img2,
      imgTitle: imgTitle2,
      title: 'Original Style',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis <br>praesentium voluptatum deleniti atque corrupti quos dolores te quas',
      color: '#000',
      color2: '#fff',
      a: "VIEW MORE"
    },
    {
      imgSrc: img3,
      imgTitle: imgTitle2,
      title: 'Summer Look',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis<br> praesentium voluptatum deleniti atque corrupti quos dolores te quas',
      color: '#000',
      color2: '#fff',
      a: "VIEW MORE"
    }
  ];
  
  const cards = [
    {
      img: '/src/assets/Imges/sunblock.jpg',
      header: 'Summer Mirage',
      p: 'Lip Gloss',
      price: '$32.00',
      id: 1,
    },
    {
      img: '/src/assets/Imges/rose_lipstick.jpg',
      header: 'stick lipstick',
      p: 'Lip Gloss',
      price: '$37.00',
      id: 2,
    },
    {
      img: '/src/assets/Imges/seerum.jpg',
      header: 'Film Eyeshadow',
      p: 'Lip Gloss',
      discount:'$27.00',
      price: '$32.00',
      id: 3,
    },
    {
      img: '/src/assets/Imges/shampoo.jpg',
      header: 'Wild Palettes',
      p: 'Lip Gloss',
      price: '$25.00',
      id: 4,
    },
    {
      img:'/src/assets/Imges/lip_color.jpg',
      header:'Rose Safari',
      p: 'Lip Gloss',
      price: '$35.00',
      id: 5,
    },
  
    // other cards
  ];
  const post=[
    {
      img:'./src/assets/Imges/brush.jpg',
      title:'lip liner',
      cat:' BodyCare'
    },
    {
      img:'./src/assets/Imges/women_1.jpg',
       title:'Scratch Eyeliner ',
        cat:' Comestics'
    },
    {
      img:'./src/assets/Imges/lose_poder.jpg',
       title:'Baked Blush',
        cat:' Make Up'
    },
    {
      img:'./src/assets/Imges/women_2.jpg',
      title:'Pointy Ball',
       cat:' BodyCare'
    },
    {
      img:'./src/assets/Imges/women_3.jpg',
       title:'Mineral Blush ',
       cat:' Comestics'
    },
    {
      img:'./src/assets/Imges/shadow.jpg',
       title:'Face Primer',
       cat:' Make Up'
    },
    {
      img:'./src/assets/Imges/women3.jpg',
       title:'Cool Primer',
       cat:' BodyCare'
    },
    {
      img:'./src/assets/Imges/makeup.jpg',
        title:'Skin Care',
       cat:' Comestick'
    },
  ]
  const cardSlider=[
    {
      img2:'./src/assets/Imges/client1_2.png',
      img:'./src/assets/Imges/client1.png'
    },
    {
      img:'./src/assets/Imges/client2.png',
       img2:'./src/assets/Imges/client2_2.png'
    },
    {
      img:'./src/assets/Imges/client3.png',
      img2:'./src/assets/Imges/client3_2.png'
    },
    {
      img:'./src/assets/Imges/client4.png'
      ,img2:'./src/assets/Imges/client4_2.png'
    },{
      img:'./src/assets/Imges/client5.png',
      img2:'./src/assets/Imges/client5_2.png'
    },
    {
      img:'./src/assets/Imges/client6.png',
      img2:'./src/assets/Imges/client6_2.png'
    },
    {
      img:'./src/assets/Imges/client7.png'
      ,img2:'./src/assets/Imges/client7_2.png'
    },
    {
      img:'./src/assets/Imges/client8.png',
      img2:'./src/assets/Imges/client8_2.png'
    },
  ]
  const slide = [
    {
      headerpar: 'perfect shades',
      header: 'testimonials',
      header4: 'Marc Jacobs',
      pargraph: "Biagiotti is definitely the place to be when it comes to makeup: You go into the store, and touch it, and try it, and love it. I've never bought anything on the Internet. I like experience ",
    },
    {
      headerpar: 'perfect shades',
      header: 'testimonials',
      header4: 'iman',
      pargraph: "I would go to cosmetics counters and buy two or three foundations and powders, and then go home and mix them before I came up with something suitable for my undertones.",
    },
    {
      headerpar: 'perfect shades',
      header: 'testimonials',
      header4: 'Dita Von Teese',
      pargraph: "I would go to cosmetics counters and buy two or three foundations and powders, and then go home and mix them before I came up with something suitable for my undertones.",
    },
  ];
  const number=[
    {
      img:'./src/assets/Imges/num1.png',
      title:'On-line purchase',
      par:'At vero eos et accusamus et iusto odio digniss ducimus qui blanditiis praesentium volu'
    },
    {
      img:'./src/assets/Imges/num2.png',
      title:'Free shipping',
      par:'At vero eos et accusamus et iusto odio digniss ducimus qui blanditiis praesentium volu'
    },
    {
      img:'./src/assets/Imges/num3.png',
      title:'Money back',
      par:'At vero eos et accusamus et iusto odio digniss ducimus qui blanditiis praesentium volu'
    },
  ]
  const back=[
    {
      img:'./src/assets/Imges/background_girl.jpg'
    },
    {
      img:'./src/assets/Imges/back2.jpg',
      title:'timeline',
      header:'How Did We Get Here ',
      btn2:'Find Beauty',
      par1:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt ',
      par2:'At vero eos et accusamus et iusto odi odgnissimos ducimus qui blanditiis praesentium volup tatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi '
    },
    {
      img:'./src/assets/Imges/back3.jpg',
      title:'timeline',
      btn2:'Find Beauty',
      header:'How Did We Get Here ',
      par1:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt ',
      par2:'At vero eos et accusamus et iusto odi odgnissimos ducimus qui blanditiis praesentium volup tatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi '
    },
    {
      img:'./src/assets/Imges/makeup_back.jpg',
      icon: <IoPlaySharp />, // Add your icon here
    },
  ]
  const small_card=[
    {
      img:'./src/assets/Imges/small1.jpg',
      side_h:'Rest Complex',
      pargraph:'An dico accommodare ius, porro',
      price:'$36.00'
    },
    {
      img:'./src/assets/Imges/rose_lipstick.jpg',
      side_h:'Sweet Milk',
      pargraph:'An dico accommodare ius, porro',
      price:'$46.00'
    },
    {
      img:'./src/assets/Imges/small2.jpg',
      side_h:'Hand Cream',
      pargraph:'An dico accommodare ius, porro',
      price:'$52.00'
    },
    {
      img:'./src/assets/Imges/small3.jpg',
      side_h:'Moist Lotion',
      pargraph:'An dico accommodare ius, porro',
      price:'$43.00'
    },
    {
      img:'./src/assets/Imges/small4.jpg',
      side_h:'Cream-Milk Ex',
      pargraph:'An dico accommodare ius, porro',
      price:'$38.00'
    },
    {
      img:'./src/assets/Imges/small5.jpg',
      side_h:'Body Cream',
      pargraph:'An dico accommodare ius, porro',
      price:'$55.00'
    },
    {
      img:'./src/assets/Imges/small6.jpg',
      side_h:'Body mist',
      pargraph:'An dico accommodare ius, porro',
      price:'$45.00'
    },
    {
      img:'./src/assets/Imges/small7.jpg',
      side_h:'Roll Eye Gel',
      pargraph:'An dico accommodare ius, porro',
      price:'$33.00'
    },
    {
      img:'./src/assets/Imges/rose_lipstick.jpg',
      side_h:'Sebum Control',
      pargraph:'An dico accommodare ius, porro',
      price:'$24.00'
    },
    {
      img:'./src/assets/Imges/small1.jpg',
      side_h:'Hydra On',
      pargraph:'An dico accommodare ius, porro',
      price:'$34.00'
    },
    {
      img:'./src/assets/Imges/small3.jpg',
      side_h:'Rewind Effect',
      pargraph:'An dico accommodare ius, porro',
      price:'$28.00'
    },
    {
      img:'./src/assets/Imges/small4.jpg',
      side_h:'Clean Cream',
      pargraph:'An dico accommodare ius, porro',
      price:'$32.00'
    },
  ]
  const font=[
    {
      imgback:'./src/assets/Imges/font_bck1.png',
      img:'./src/assets/Imges/font1.png',
      header:'Fragrance'
      ,pargraph:'At vero eos et accusamus et iusto odio dignissi mos ducimus qui blanditiis praesentium'
    },
    {
      imgback:'./src/assets/Imges/fontback2.png',
      img:'./src/assets/Imges/font2.png',
      header:'Quality'
      ,pargraph:'At vero eos et accusamus et iusto odio dignissi mos ducimus qui blanditiis praesentium'
    },
    {
      imgback:'./src/assets/Imges/font3.png',
      img:'./src/assets/Imges/font32.png',
      header:'Petroleum'
      ,pargraph:'At vero eos et accusamus et iusto odio dignissi mos ducimus qui blanditiis praesentium'
    },
    {
      imgback:'./src/assets/Imges/fontback4.png',
      img:'./src/assets/Imges/font4.png',
      header:'Colors'
      ,pargraph:'At vero eos et accusamus et iusto odio dignissi mos ducimus qui blanditiis praesentium'
    },
    {
      imgback:'./src/assets/Imges/fontback5.png',
      img:'./src/assets/Imges/font5.png',
      header:'Natural'
      ,pargraph:'At vero eos et accusamus et iusto odio dignissi mos ducimus qui blanditiis praesentium'
    },
 
  ]
  const card4 = [
    {
      img: './src/assets/Imges/women_4.jpg',
      header: 'The cosmetics world',
      par: 'Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.Et ',
      read: 'Read me',
      dateMonth: 'Apr',
      dateDay: '08'
    },
    {
      img: './src/assets/Imges/shadow2.jpg',
      header: 'Prep a good primer',
      par: 'Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.Et ',
      read: 'Read me',
      dateMonth: 'Apr',
      dateDay: '08'
    },
    {
      img: './src/assets/Imges/women_1.jpg',
      header: 'Know How to apply it',
      par: 'Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.Et ',
      read: 'Read me',
      dateMonth: 'Apr',
      dateDay: '08'
    },
    {
      img: './src/assets/Imges/brush1.jpg',
      header: '50 Shades of Great',
      par: 'Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.Et ',
      read: 'Read me',
      dateMonth: 'Apr',
      dateDay: '08'
    },
  ];
  

  export  { last, slides,cards,post,cardSlider,slide,number,back,small_card,font,card4 };
