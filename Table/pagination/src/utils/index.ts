import _ from 'lodash';

export const returnPaginationrange = (totalPage,page,limit,siblings) => {
    let totalPageNoInArray = 7 + siblings;



    if(!totalPageNoInArray >= totalPage){
        return _.range(1,totalPage+1)
    }

    let leftSiblingsIndex = Math.max(page-siblings,1);
    let showLeftDots = leftSiblingsIndex > 2;

    let rightSiblingsIndex = Math.min(page+siblings,totalPage);
    let showRightDots = rightSiblingsIndex < totalPage-2

    if(!showLeftDots && showRightDots){
        let leftItemsCount = 3+2*siblings
        let range = _.range(1,leftItemsCount+1);
        let leftRange = range.filter((value:number)=>value!=totalPage && value>0)
        return [...leftRange," ...",totalPage]
    }else if(!showRightDots && showLeftDots){
        let RightItemsCount = 3+2*siblings
        let range = _.range(totalPage - RightItemsCount+1,totalPage+1);
        let rightRange = range.filter((value:number)=>value>1)
        return [1,'... ',...rightRange]
    }else{
        let middleRange = _.range(leftSiblingsIndex,rightSiblingsIndex+1);
        // let middleRange = range.filter((value:number)=>value!=1)
        return ['... ',...middleRange,' ...']
    }
    
}