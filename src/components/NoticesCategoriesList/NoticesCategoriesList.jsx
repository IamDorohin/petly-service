import NoticesCategoriesItem from 'components/NoticesCategoriesItem/NoticesCategoriesItem'
import { Ul }  from 'components/NoticesCategoriesList/NoticesCategoriesList.styled'

const NoticesCategoriesList = () => {
    
    const fakeApi = [
        {
            'title': 'Кусает',
            'image': 'https://img.freepik.com/free-photo/white-dog_95678-2.jpg?w=1380&t=st=1679478369~exp=1679478969~hmac=c9ff88729b1277cfc1702c2f114accd314a513b27ba8c985230de517ee51fc06',
            'breed': 'Лабрадор',
            'place': 'London',
            'age': '2',
            'price': '500$',
            'userLogin': false
        },
        {
            'title': 'Лижит где укажишь',
            'image': 'https://img.freepik.com/premium-photo/welsh-corgi-pembroke-sits_98296-991.jpg?w=1380',
            'breed': 'Языкастое',
            'place': 'Paris',
            'age': '12',
            'price': '600$',
            'userLogin': true
        },
        {
            'title': 'Любит трахаться ',
            'image': 'https://img.freepik.com/premium-photo/finnish-spitz-dog-photo-studio-generative-ai_109813-20.jpg?w=740',
            'breed': 'Ебунчик',
            'place': 'Ottawa',
            'age': '4',
            'price': '400$',
            'userLogin': true
        },
        {
            'title': 'Жрет как ебанутая',
            'image': 'https://img.freepik.com/free-psd/view-of-adorable-brown-and-white-pet-dog_23-2150179390.jpg?w=1060&t=st=1679478585~exp=1679479185~hmac=62d59f779c673ec3f328b3cc0e22b1d8d7b3d6cd7d0eef6f0dc6157552f6910e',
            'breed': 'Зубастик',
            'place': 'Berlin',
            'age': '3',
            'price': '300$',
            'userLogin': false
        },
        {
            'title': 'Любит трахать ногу',
            'image': 'https://img.freepik.com/free-photo/on-the-run-maltipu-little-dog-is-posing_155003-22631.jpg?w=1380&t=st=1679478606~exp=1679479206~hmac=d4781dc275e6af6ceeec55669caa7e80dd4269d7bc1c0a54ee63e79155587863',
            'breed': 'Ебунчик',
            'place': 'Vena',
            'age': '5',
            'price': '800$',
            'userLogin': false
        },
        {
            'title': 'Слюни и шерсть везде от нее',
            'image': 'https://img.freepik.com/free-photo/cute-spitz_144627-7076.jpg?w=740&t=st=1679478630~exp=1679479230~hmac=f02141a5db867e577322b049df4dc558fdd6d58cf3062ca34db4eb7179e80b4f',
            'breed': 'Лохматка',
            'place': 'Madrid',
            'age': '13',
            'price': '30$',
            'userLogin': false
        },
        {
            'title': 'Злой ублюдок',
            'image': 'https://img.freepik.com/free-photo/pug-dog-isolated-on-a-white-background_2829-11416.jpg?w=740&t=st=1679478653~exp=1679479253~hmac=17406a355a1593d6fe68e41d05d69035f7fa25ef32f924a7fbfc8d0542c2fa9c',
            'breed': 'Узконосый',
            'place': 'Ganduras',
            'age': '23',
            'price': '250$',
            'userLogin': true
        },
        {
            'title': 'Страншно воняет',
            'image': 'https://img.freepik.com/free-photo/low-angle-cute-shiba-inu-dog_23-2149457836.jpg?w=1380&t=st=1679478696~exp=1679479296~hmac=2b5d58a2763e093f220c20f164fd19bcb0d3141032e527858aae7b6db9c642b3',
            'breed': 'Лис',
            'place': 'Melburn',
            'age': '34',
            'price': '40$',
            'userLogin': true
        }
    ]
    console.log(fakeApi);
    
    return (
        <Ul>
            {fakeApi.map(dog => (
                <NoticesCategoriesItem
                    key={dog.title}
                    item={dog}
                   
                />
                ))}
            
            
        </Ul>
    )
}

export default NoticesCategoriesList