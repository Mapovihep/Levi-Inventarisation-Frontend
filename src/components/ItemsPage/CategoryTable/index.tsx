import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { inventoryAction } from '../../../store/actions/inventory/inventory'
import { useAppSelector } from '../../../store/reducers/hooks'
import "./categoryTable.css"


type ICategoryTable = {
    addCategoryToQuery: (category: string) => void
}
export const CategoryTable: React.FC<ICategoryTable> = ({addCategoryToQuery}) => {
    const categories = useAppSelector(state=>state.Inventory.categories);
    const selectedCategory = useAppSelector(state=>state.Inventory.queryParams.category);
    const categoryAmmount = useAppSelector(state=>state.Inventory.inventory).length;
    const [opened, setOpened] = useState<boolean>(true);

    const selectHandler = (category: string) => {
        addCategoryToQuery(category);
    }
    return (
        <div>
            <button className="addCategory__ItemsPage">+ Add Category</button>
            <ul className="columnTitles__ItemsPage">
                <li className="columnTitle__ItemsPage">CATEGORY</li>
                <li className="columnTitle__ItemsPage">NUMBER OF ITEMS</li>
            </ul>
            <ul className="categoryList__ItemsPage">
                <li className={`category__ItemsPage ${selectedCategory=="All" && "categorySelected__ItemsPage"}`}
                    onClick={() => selectHandler('All')}
                >
                    <Typography
                    className='categoryName__ItemsPage'
                    >
                        All Items
                    </Typography>
                    <Typography className='categoryAmmount__ItemsPage'>
                        {categoryAmmount}
                    </Typography>
                </li>
                {categories.map(category =>
                <li className={`category__ItemsPage ${selectedCategory===category.categoryName && "categorySelected__ItemsPage"}`}
                    key={Math.random()}
                    onClick={() => selectHandler(category.categoryName)}
                    >
                    <Typography
                    className='categoryName__ItemsPage'
                    style={{marginLeft: "15px"}}
                    >
                        {category.categoryName}
                    </Typography>
                    <Typography
                    className='categoryAmmount__ItemsPage'
                    >
                        {category.ammount}
                    </Typography>
                </li>)}
            </ul>
        </div>
    )
}