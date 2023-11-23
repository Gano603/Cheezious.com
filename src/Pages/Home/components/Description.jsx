import React, { useState } from 'react'
import Description_tabs from './Description_tabs'

const Description = () => {

  const [selected,setselected] = useState([])

  const description = [["Craving for Something Cheesy and Magical?",`A deal that is light on the pocket yet packed with flavors that are all set to tantalize your taste buds?<br />If yes, then order your favorite <strong>deals from Cheezious</strong> right away!<br />We offer a variety of fast food items in our menu, including your favorite <strong>pizza and zinger burger</strong> bursting with flavors.<br />Even if at midnight you crave for something super delicious, dine-in isn't possible while you search for <strong>pizza delivery near me</strong>, just look up for Cheezious and we'll help fill your tummy with food that is finger-licking good.<br />We provide <strong>pizza delivery in Islamabad</strong> and <strong>Rawalpindi</strong>, so if you're residing in the twin cities, it is time you get hold of the best tasting <strong>fast food in town</strong> that too at minimum prices.<br />We promise, our rates are better than all those bigger names with taste uncompromised. And if you have a family gathering to entertain, why not avail your favorite items in a bundle deal while saving a few good bucks?<br />Let Cheezious give you a taste of the original food that is served piping hot and fresh. What are you waiting for? Pick up your phone and place your order right away!`],
                      ["Why Cheezious Deals?",`Feeling hungry? Dreaming of munching on your favorite zinger burger with an extra slice of cheese?<br />When hunger hits hard, it is time to visit us and check out <strong>Cheezious menu</strong> for your favorite item. What do we offer?<br />We the juiciest and fulfilling <strong>zinger burgers and pizza</strong> that is a little spicy! Because what is life without spice, right?<br />Or maybe try out something desi as Behari rolls from our menu? Whatever you like, we serve it hot to you.<br /><strong>Cheezious Islamabad and Rawalpindi</strong> maybe a new name to you, but we promise to make you fall in love without superbly <strong>delicious food</strong>.<br />All items are priced affordably yet if you still wish to save a few bucks, check out <strong>Cheezious deals</strong> that are good enough to serve a complete group of friends.<br />But what if you feel hungry at an hour when no other restaurant is open to serve? No matter what time it is, we <strong>Cheezious delivery</strong> will bring you food that'll settle down you're hungry with delectable food. Yes, our food is "fast" in delivery and full of taste that is hard to match!<br />When hunger hits hard, all you need to do is <strong>call Cheezious!</strong>`],
                      ["So What makes us different from the rest?",`The TASTE, of course! And our deals too!<br />We bring to you the <strong>best zinger burger deals in Rawalpindi and Islamabad</strong> so even if you're a student with a few bucks in your pocket, you can still enjoy the most delicious food in town by ordering from us.<br />Are you up for looking for the best and affordable <strong>zinger burger deals</strong> in the twin cities? We bet you won't find deals better than ours.<br />Moreover, our deals aren't just restricted to your favorite, crispy burgers. We also have some bombastic deals being offered on our special pizza, calzone and other edible items that'll shout 'AMAZING'.<br />We are sure, once you try our food, you'll come back for more!<br />Pizza and burger is something you can eat anytime and anywhere, right? But a legit pizza is one that is oozing with melted cheese and full of your favorite topping, which is hard to find!<br />If you've been in search of the <strong>best pizza deals in Rawalpindi and Islamabad</strong> than you're in for a surprise because Cheezious is here to give you a taste of the original.`],
                      ["Who are we?",`We are a new set up in the twin cities, bringing exciting flavor for you to enjoy.<br />Yes, we know you can find burgers and pizzas everywhere but not as good as ours!<br />From a little desi touch of Behari kabab roll to fabulous Italian pizza, our menu is based on popular <strong>fast food items</strong> that people love the most.`],
                      ["Why do we say so?",`Because unlike other international chains that serve you merely with a piece of baked flatbread with a few chunks of meat and cheese somewhere on top, we serve the original "pizzas".<br />With a generous amount of toppings (a variety of options that you get to choose from), enough cheese to feed an entire neighborhood and sauce with a secret ingredient, we are proud to say our pizzas are the best in town.<br />For the <strong>best pizza deals and pizza delivery</strong> in your vicinity, just call us right away!<br />Remember, your just a phone call away from trying the finest pizza near you so don't be deprived of great food that can be dropped off at your doorstep piping hot!<br />Calling all foodies out there! <strong>Cheezious is in town</strong>, serving you with the heavenly and distinctive flavors that force you to gulp down even the last bite without sharing it with a friend or two!<br />Yes, our food is THAT good!`],
                      ["Where are we located?",`We offer <strong>food delivery in Islamabad and Rawalpindi</strong>, so yes, the twin cities are fortunate enough to get hold of a fast food joint that serve a variety of delectable items that are hard to resist.<br />Are the kids screaming for pizza? Or have friends coming over who are die-hard fans of flaming, hot wings?<br />Whoever at your end craves for whatever thing, call us for the most convenient <strong>fast food delivery in Rawalpindi</strong>. Oh, and yes, we offer <strong>fast food deliver in Islamabad</strong> too!<br />Whether it about biting into crispy and spicy kabab rolls or zinger burger oozing with your favorite sauce, call us right away to indulge into a food coma with food that is fit for a king!<br />Cheezious is the new name for <strong>delicious fast food</strong> , so do not stay away from ordering your deals right away!`]]

  return (
    <div className='w-[90vw] mx-[5vw]'>
        <div className='bg-yellow-500 flex flex-col items-center py-10 px-16 rounded-xl'>
            <h2 className='my-4 text-black text-4xl font-semibold'>Finest Taste Ever</h2>
            <div className='rounded-[0.3rem] overflow-hidden w-full'>
              {description.map((index,iter)=>(
                <Description_tabs key={iter} selected={selected} setselected={setselected} iter={iter} description_title={index[0]} description_data={index[1]} cond={Array.isArray(selected)? selected.includes(iter):false} />
              ))}
            </div>
        </div>
    </div>
  )
}

export default Description
