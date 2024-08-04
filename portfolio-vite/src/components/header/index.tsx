import * as S from "./style"

export default function Header(){
    return(
        <S.Headerdiv>
            <S.Logo>Portifolio</S.Logo>
            
            <S.Menu>
                <S.Options href="">Sobre mim</S.Options>
                <S.Options href="">Projetos</S.Options>
                <S.Options href="">Serviços</S.Options>
                <S.Options href="">Tecnologias</S.Options>
            </S.Menu>
        </S.Headerdiv>
    )
}