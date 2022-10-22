export const items: ItemType[] = [
		{
				id:'1',
				imageUrl: 'https://cdn1.ozone.ru/s3/multimedia-5/6005250389.jpg',
				name: 'Пылесос',
				description: 'Отпылесосит вам как надо и не только',
				price: 200
		},
		{
				id:'2',
				imageUrl: 'https://res-2.cloudinary.com/grover/image/upload/v1630928581/fqqvgrbrrlwterxyxaji.png',
				name: 'Iphone 12',
				description: 'Если хотите минет подарите девушке его',
				price: 1000
		},
		{
				id:'3',
				imageUrl: 'https://m.media-amazon.com/images/I/61NRYreJ2cL._AC_SX522_.jpg',
				name: 'Macbook',
				description: 'Идеальный вариант для вас если вы инвалид',
				price: 2000
		},
		{
				id:'4',
				imageUrl: 'https://cdnn21.img.ria.ru/images/98976/61/989766135_0:105:2000:1230_600x0_80_0_0_22f73da863b108382af02825eddc84f0.jpg',
				name: 'Pizza',
				description: 'Если проголодались купите эту сочную сучку',
				price: 10
		},
		{
				id:'5',
				imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRcB3H9o8Q-BIbmN1lbyHNLIN0z7T3j9WL_c59_5KMlsGhZt4xq_vaetq-tEEp4ftiHUPgJwrsyJKc2yZ0OwOko6Dn190NeiRjYKaPjRv6lR9BnCPF_CfUhNA&usqp=CAE',
				name: 'Китайский телефон',
				description: 'для нищебродов',
				price: 100
		},
		{
				id:'6',
				imageUrl: 'https://img.mvideo.ru/Pdb/30028366b.jpg',
				name: 'Супер игровой ноутбук MSI',
				description: 'чтобы поиграть в танчики после завода и задонатить всю зарплату',
				price: 5000
		},
		{
				id:'7',
				imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6ANQIfUcBb7gL1rwYIufMYs6JKugNXystw&usqp=CAU',
				name: 'Hyundai solaris',
				description: 'если вы из узбекистана это ваш вариант',
				price: 150000
		},
]
export type ItemType = {
		imageUrl: string
		name: string
		description: string
		price: number
		id:string
}