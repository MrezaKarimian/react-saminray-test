import MenuBookIcon from '@material-ui/icons/MenuBook';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import CategoryIcon from '@material-ui/icons/Category';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';


const menu = [
  { icon: <MenuBookIcon />, key: "/app/article", label: "مقاله" },
  { icon: <NoteAddIcon />, key: "/app/add-article", label: "اضافه کردن مقاله" },
  { icon: <CategoryIcon />, key: "/app/category", label: "دسته بندی" },
  {
    icon: <PlaylistAddIcon />,
    key: "/app/add-category",
    label: "اضافه کردن دسته بندی",
  },
];

export default menu;
