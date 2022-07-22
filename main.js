let str = `
010-3185-9026
rudwns9551@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
    str.match(/(?<=@).{1,}/g)
)