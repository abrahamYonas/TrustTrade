import { IProduct } from "./types/product-type";

const dummyImage = (id:number) => `https://unsplash.it/150/200?image=${id}`

export const productList: IProduct[] = [{
    "id": 1,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(1),
    "price": 3,
    "brand": "vel enim sit amet nunc viverra dapibus nulla suscipit ligula in",
    "stockCount": 85,
    "description": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    "owner": "d7f8985d2e597a07cea1d1af01b879dcf1c970aa"
}, {
    "id": 2,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(2),
    "price": 21,
    "brand": "at nulla suspendisse potenti cras in purus eu magna vulputate luctus",
    "stockCount": 78,
    "description": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    "owner": "c7f1a4fc979a0e83ab6925573e22c1d4de365969"
}, {
    "id": 3,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(3),
    "price": 16,
    "brand": "risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit",
    "stockCount": 2,
    "description": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    "owner": "6a35ea044672d96f65d1cc24a40489696e211813"
}, {
    "id": 4,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(4),
    "price": 6,
    "brand": "praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede",
    "stockCount": 91,
    "description": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    "owner": "240a54cf2bf0d7ed93ccbe94034ebcd078ed9b6a"
}, {
    "id": 5,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(5),
    "price": 31,
    "brand": "lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi",
    "stockCount": 48,
    "description": "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    "owner": "72d3c80f5f9876fa16e2232f421986c1d29c8a60"
}, {
    "id": 6,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(6),
    "price": 92,
    "brand": "quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas",
    "stockCount": 33,
    "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    "owner": "3ebbf7ab2baaa5c89311e3397d7b2ec1655c758d"
}, {
    "id": 7,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(7),
    "price": 5,
    "brand": "libero ut massa volutpat convallis morbi odio odio elementum eu",
    "stockCount": 88,
    "description": "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    "owner": "57cc909acc7e2c0c147bab076b704bf4bd832097"
}, {
    "id": 8,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(8),
    "price": 55,
    "brand": "congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero",
    "stockCount": 33,
    "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    "owner": "33b52617651ef900ff740ea25e29c2d99cb74687"
}, {
    "id": 9,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(9),
    "price": 71,
    "brand": "sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo",
    "stockCount": 16,
    "description": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    "owner": "ce41cd27bf0917201c672e2bd02e979e8e62b1b0"
}, {
    "id": 10,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(10),
    "price": 82,
    "brand": "quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus",
    "stockCount": 81,
    "description": "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    "owner": "8cee71be721cf17f0cc841c5a8508a725a6490a5"
}, {
    "id": 11,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(11),
    "price": 92,
    "brand": "libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna",
    "stockCount": 2,
    "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    "owner": "f4c27fd8636f483f7f99b1e7fe47237fb956563c"
}, {
    "id": 12,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(12),
    "price": 6,
    "brand": "sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec",
    "stockCount": 8,
    "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "owner": "d0bf072a2a71ba09976abe88d7edcc76c9e1bfae"
}, {
    "id": 13,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(13),
    "price": 19,
    "brand": "ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien",
    "stockCount": 69,
    "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    "owner": "5440cb1abecb4812d95cfd13c0cc093059527773"
}, {
    "id": 14,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(14),
    "price": 68,
    "brand": "amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras",
    "stockCount": 73,
    "description": "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    "owner": "6e492aa683a2181a9d698bf5bd42cae24931bcda"
}, {
    "id": 15,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(15),
    "price": 85,
    "brand": "luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut",
    "stockCount": 94,
    "description": "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    "owner": "add494d0382530f0aae098e1c9d34f78e347874d"
}, {
    "id": 16,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(16),
    "price": 58,
    "brand": "montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent",
    "stockCount": 20,
    "description": "Nullam sit amet turpis elementum ligula vehicula consequat.",
    "owner": "2dae45774cd993058ee44b2a3d82a48b7b53b199"
}, {
    "id": 17,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(17),
    "price": 37,
    "brand": "dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis",
    "stockCount": 24,
    "description": "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    "owner": "0a2fe24a51ab4eb16e584779975e4e561f6d52cf"
}, {
    "id": 18,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(18),
    "price": 17,
    "brand": "vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    "stockCount": 77,
    "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    "owner": "2b35500a4fe502a6b267f5ffc99caa91d29be46b"
}, {
    "id": 19,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(19),
    "price": 72,
    "brand": "dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat",
    "stockCount": 80,
    "description": "Curabitur convallis.",
    "owner": "e74407fede44b9611994e0faab9f44678ed72687"
}, {
    "id": 20,
    "name": "Air Jordan 4 Retro Re imagined",
    "image": dummyImage(20),
    "price": 32,
    "brand": "viverra eget congue eget semper rutrum nulla nunc purus phasellus in",
    "stockCount": 25,
    "description": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    "owner": "7e9dc789ba55287b72754c75d35e7b94d446470f"
},];