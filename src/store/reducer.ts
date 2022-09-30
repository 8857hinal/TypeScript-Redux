import * as actionTypes from './actionTypes'

const initialState: ArticleState = {
    articles: [
        {
            id: 1,
            title: "First",
            body: "This is First Post."
        },
        {
            id: 2,
            title: "Second",
            body: "This is Second Post."
        },
        {
            id: 3,
            title: "Third",
            body: "This is Third Post."
        }
    ]
}

const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction
): ArticleState => {
    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle: IArticle = {
                id: Math.random(),
                title: action.article.title,
                body: action.article.body,
            }
            return {
                ...state,
                articles: state.articles.concat(newArticle)
            }
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticles: IArticle[] = state.articles.filter(
                article => article.id !== action.article.id
            )
            return {
                ...state,
                articles: updatedArticles
            }
    }
    return state
}

export default reducer