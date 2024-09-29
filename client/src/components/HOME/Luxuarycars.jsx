import React from "react";

const luxuarycars = () => {
  return (
    <>
      <div className="relative  flexbox index min-h-screen items-center justify-center bg-stone-950 ">
        <h1 className="text-3xl mt-10 font-bold text-gray-600 text-center pt-10 ">
          LUXURY CARS
        </h1>
        <div className="mt-20">
          <div className="flex space-x-4 animate-scroll p-10 h-10">
            <div className="flex-none w-96 h-60 bg-black border border-gray-300 rounded-xl shadow-lg p-6">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/ferrari-1669909439.jpeg?crop=0.821xw:0.730xh;0.0945xw,0.171xh&resize=800:*"
                alt=""
              />
            </div>
            <div className="flex-none w-96 h-60 bg-black border border-gray-300 rounded-xl shadow-lg p-6">
              <img
                src="https://www.mansory.com/sites/default/files/styles/1920x800_fullwidth_car_slider/public/2021-09/audi_rs_7_front_1.jpg?itok=1S2Ph9Gr"
                alt=""
              />
            </div>
            <div className="flex-none w-96 h-60 bg-black border border-gray-300 rounded-xl shadow-lg p-6">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/2022-ferrari-daytona-sp3-102-1659298018.jpg?crop=0.699xw:0.589xh;0.151xw,0.284xh&resize=700:*"
                alt=""
              />
            </div>
            <div className="flex-none w-96 h-60 bg-black border border-gray-300 rounded-xl shadow-lg p-6">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEhMVFRUXFxUXGBcWFxUXFxcWFRYYGBcVGBcYHiggGBolHRcVITEhJiorLi4uFx8zODMsNygtLisBCgoKDg0OFQ8QGi0dHR0wLS0tLS0rKystLSstLS0tLy0tLS0tLS0tLS0tLS0rLS0tLS0tLi0tLS0rLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAECAwQGBwj/xABDEAABAwEEBgcGAwgBAwUAAAABAAIRAwQhMUEFEhNRYXEGFIGRodHwIjJCUrHBYpLhBxUzQ1OCovFyFtLiFyOys8L/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACERAQACAgICAwEBAAAAAAAAAAABEQISE1EDITFBYXEi/9oADAMBAAIRAxEAPwDtjTUTSRDYpjRQDjSUDSRI0VA0UA11JVupIoaKgaKAWaKrNFFTQUTQQCjRUTRRU0FE0EAk0VE0UWNnUTZ0Ak0VE0UWNnUTZ0Ag0FE0EXNnUTZ0Ac0FE0EX6sl1ZEBjQTbBGOrJurIA5oJjQRg2VN1ZAH6um2CMdWTGzIA5oJjQRjqyY2ZAHNBNsUXNlTGzIA+xTGii5syY2ZAI2KbYoubMomzIBJopbFFerJurIBRoqJoov1ZRNmQCTRUdkixsyj1ZB6XskxpLbs02zRWI0lE0lt2abZoMJpKJoreaabZoMBoqJoohsk2yQDjQTGgiOyTbJAONBRNBEtkm2SAabOomzopsk2yQCzZ1E2dFNim2KAWbOm6uimxS2KAX1dN1ZFdim2KAV1ZN1ZFdilsVECerJurItsE2wRQnqybqyLbBNsEQJ6somzIvsE2wRQg2ZRNmRjYJtggDmzKPVkZNBNsEAbqqbqqM7BNsEAbqqRsqMdXS6uoApsqj1VGzZ1Hq6o6vVTaqthKFRTqJaiuhNqoKdRNqK/VS1UFGom1FfqpaqCjUTai0aqbVQZ9mls1o1U2qgz7NNs1p1UtVBm2abZrTqpaqDNs02zWnVS1UGbZptmtWqm1VBm2aWzWnVS1UGXZpbJatRLUQZNklslr1E2ogybJNsls1E2zQY9km2S1libVCDJsk2yWzUS2aDFsktktmzS1EGLYpbJbNRLURWPYptituols0BGEoUklURhKFJJBGE0KSUIIwlClCYuG8IGhNCi+0MGLmjtCz1NKUG41WDtClwtS1QlCFVOk1kbjWb2SfoFmf0xsY+Nx/tP3U2jtdcuh6E0LnD03s0w0PPY0fdU1enFIYUnH+4BTkx7Xjy6dTCULjndOxlR73fos9bp28YU2DnrH7qcmK8WTuIShed1undfIUweR81lf00thwIHJjfuE5YXil6dChVe1olxDRvJAHeV5TX0/bKgja1OQMfRYTZq7zJa9xO/WPK8rPKseH9eoWnpJZGe9XZ/bLv/iChlbpzZR7oqO5NAHiQuGZoO0O+A9vFbLP0aqGNa4XYXysz5ZajxQ6un0vL/4dAxvc6PABa/3zVPwtHYfuVis1iaxoUapK5z5Mu3SPHh00VtL1fnA5AeSHWjTVX53d/kouoOdkSm/djjiI9R9PLcVjbKftvXGPphtGlqvzu7z9fvgh9XSNU5uPac8BG84xkLyjb9GgYnv3eu/OVjtdFgHvNOON/E/bw5ooDaNIVsnEYXzvN55ZA5rE/SNb53d/HBb7W4bweXif18Sh1TVWopmUHW+sf5j+8hPT0hXH82p+d3mqy0JQtemWynpy0t/n1B/c5aqXSq1t/nvPOChLmpiAhTo6XTe2DF7DzaFtpftArD3mMPK7wXHlqYK3Paax09Bs3T3WxpRxv81tZ01pn4R3nyXmV5um5RNHn3ptl2a49PbbNpCuP4oo/wBrnz9CFe/TLRl4oBWtCxvqk4AnkrySzxYugq9IgMh4rFV6UnIDuQoaOqu+E9qvp6Adi5wU3ylrTCE39KKpwVY6QVXXFxHb9lpp6EpjElWt0dRHwypeXa/56BbVper87ihtbSNY3azjyn7LsBZmfKFdTojIeClFw8+dTrOyeewqVPRFc3im4r0enQ4K3UA3LWqbPOW9G7Qfg7yArafRG0HHVHb5L0A1GjNQNcZJSXLix0Oq/OwdhVjOhrsXVe5p+6601ScAlqvKUXLmWdEG5vcewBWs6J0BiXHmV0QsrjiU/VBm5KLA2aCszfgB5z5rQ3R9AYMb+UInqUxvKY2hgwaEpbljZSaMG9wVjaJyapv0jGACpfpN29ZuFrJe2zv3eCdtldmsD9Iu3qh1udvTaF1kZ6vwntHmq3UNzW9480DdbjvVjLQ45qbQaSKOo1TuHIhZ6tjrHCO8JqLpWtkp6k9wCWnRFpdgG/mHmg1r6L2x2DQf7mea7lrwEjagFahLyecu6IW0n+F/mzzU29DbZ/THa9nmu/dblUbclwtZOLZ0JtWYYObx9la3oLXzfSHa4/ZdabbxTOtnFTaCsnMM6BOzrMHJrj9YVzOgbPirnsZ5lHzbExtibQayDt6D0M6tQ/lCsb0MsgxNU/3N/wC1Eja/X34BQNq4+t/JNoXWWRvRSxj4Hnm8/aFYOj1jH8n/ADf5qx1rVZtJU2NRZtiptylWgtGAVRrBRdU9XLo5purKt1VRNQnBVls59ylrELA+VeygSq7PqtvxKVW1p/T+NIY0YpG0AYBY6Ty9wa3Eq+3UKdBhqV6zWAdvhmtRc/DM1HyTrUSoa84lefab/aRSpkts81IzdTgf/ZKH2T9rdVp9qyUncZe0+JcFrjylnkxh6o1gichicAOZwCCW7plYKL9ka7alT+nSDqru3UBDeZK8x6S9OK9s+BzGxc3X1gDvENCEfs91XdYYffOpjiWy6ROPvRPMLceOGJ8kvTLb+0a8to0tWAf4vvEzAADCRGMkm6645cvaOlmknPnrpbJEMp0qIaJiB7TXE45lYLbZTMi4i8c0qekagILqVIuHxAOk8SDdPcumsOc5S7u29O6lN5pPotc5sSWVdZt/HZ8u9CdLdNqtWm5lOjaKb5EPp6rgDuMsvF/DBcxabaHvNQsdf8IaALhAE62FwyXMW6x16rtaprPOU1SQOQ2cNHILOkdLvl26ij05ttB81Hm0MznWY4cwLpHLvXoPRbprYrWGiCKpBlhLjeJwOBuErxzR+kqWuKdUCofZAeHkh10lpOoDIwnOO+02Rra23o1H0DrEgMYTqzulwuy5JOMEZS+hesWe72CeWsfoVop2Szuv1T3u8143Z+llZrQH16cj4qlCo0nnqPieQS/9RKzHCKtkeMwDaGOPLWBAWde4hdp+pewWjQjHe48tPH2h5/VBbboqrTvLZHzNvHbmO1cZo79q5J1ajabZN0ufH5mMcO0kLrLB04Do/hni2oSDxB1b1MvDjP43j5so+faNClOCJWezQpM0zZX3uLGOOYcBPYRetdIscPZqMPIhcp8OUO0ebGSDQEznpVW/iHbInlOKpqNcMj4fQkFTTLojPHs7nKo+vXrlmq22hpc5oMubAcPiaTBEtuIxBGGOU3uXevX6cYN6xLpBnD169cwqy319PXgQpOqevqb/AEO3WUHv3+PHf5YnnBOWkTdf64erz/xVL6t/h27h5C/epOznlfMyfhMZn5G3/MVSW+WR/tuuP/BsNGZKinFT19h67sE5qYeHP7nv5KB78e2MefIQ0Z71Au8R3j/t7m8Tgoq3Xn14n0exOHcf19b71QH9u7cYzGEjjc0ZJF3n+vLjcOJUVeX+vWCbW4T3jwCqn1uG84R4dqU8u0geBIu7AqlOgM+gonx7lLajj2pnb7u4rs4Mr3nn4Jg4/wCzP2V5p5z9PNNdx8FFRaN3koPUywc+9PrHcEUrLa20hUrvcGtpsc4uNwHE8IDj2LyHT/Sy02rXtFNobQaf4lWS5wJa0ENkBglzbhJ9ob0c/ahptzWdSB1adQtdVPxOa0GoROQhkf3Fee2i3E2miWtaW1LPSYKbr2AuYNa6cNqNeMzMr0eP1i83k95Noq65ayuzUc9odTfBAe12DmzeQcsQcir6Oi71C3VW17DtqlVzq5cQGm8h9NzQ9wdg1gpuYLsTqQIEgRZ9KvAB1zPM4i43LcZMauvs+ixuSdoimxxqtfs3Ee0Wlo1gN4P2XHV9LVHXFzjzJ+izdYdvV2k1h3Z1RM2gTkQ9o7wZnwWGrXrD3a9Bw/E4A+AXI7U71A1/xeKlyVDrv3tWbi2i7/jUZ9yFbT0+z46UciD9CuKNoHzfVIWgHM+KtylQ7ux1LC46zabWuJvOoAbzffC1aatdms7Z1m60A5EicABm4+GJXHWOzu1HVXXNBAk5uODecAnsWSm0Va0OMMpguJxiAXOcBmQ0GOIG9Nl1ERbrRaHkUqbQYc72vaeGtElziSA0AX34LNanVGxt6Qc04OAuO8tMlrssCtVuobOym2U2Ppi0s2epJcGMDzrkPN51iynjkX5ELboiyUKlDq+syg4vL36ziL2NDKbto72SyXV5Ej3m7pU2NQrRtpZZ3bTZtrUH3OaZ1gL/AHXXEcjug712I0BZbRSFaynUaZNzKrmOIyLq72gEG6ReFw1eg6z1XUKkQbnBpDmzHvNcLiCCCCMQQqmVK1KTSe9oN8sc5p5+yVpkefStNJwpNtWyJglr6ratMY3h7S8sE3QfzHBX1HaSoOM021dU37PHjdRLXfmBQJ/SC1PbqPtVUt+Wo8vH+Z+iyP0jUZGrVNwug4AYCCDA4IOxsfT6tTOq6pWpEYioBVb2kBrh+UroNG/tIdg4McN9I3czTcLuZaCvNj0krEQ5zX8KjQ4eMLNUtjamNFgdvpnV8BI8FbKevmtY7ZV6xSqustqMf+6ySx0DVAq0yTdAAuOAvMXLo7FXrAaloaA8CddhmlUaPjY66OIMRffEA+A07W+m2WucHOMA4kARJ53i/mt7NOWqw1m7K1mu2GvID3OYZxaQ43OuxF94XPyYxlH66ePKcZv6e9Nd9v0GFx3XTuaMVA8+0SMbrok8JEuOGs1YNF29tejTrMB1XsDgDFwcJIccGgHGcYNz8VsAdjB8Wk5G8302/iMvOAi4LxPaYkC7d7N2U/CImCflEk562TH/AMd9/wAjQD7R3gGB8RMQn1fpF3s3Ztb/AE6e83ucmLO6I+VsZNge6z8IvdcTN6CBv4zhEOmMhgHxvMMbkCo6s34g3/NrEZiff/5O9kXQCpuIvumYBkG+MGkC8gZUm8ZiU2scTj34b9W5xHyNuHxEqKY09/Cc78hJ953PCLmqMfXLeO+TxvI/CpOYTkeU5cTN5O4EDeXYJti7dwyvG6Ddq8wB+EqKiCLovOIz5lozP4iY45KVMkiWgni0NcCf+TvePEXJjR3wZxxMx4uA3n2RuTPog5A8XDW7rxA4C5RR4aSpfMfynySdpGifiI7D5LmnOdvPh9yoGo71HmvS8tuoFvo5O8Cl12lm76rlDWOPl5qItJ9BKLdZ1+j848fJP12l84XJG0u3DvS6ydw70osF/aS2m21WS0ipftWNIDTqgND/AG9ebje25cGW24vJtZqtptb7Zq5DARrXEk3AZk7pI9G05YmWqns3wNxkGDdlzA3YLznTujH0abrPVq6rTVFTaEVHUqnsaoI1A4teCXS0jPFdcJiqcs7u03UalJtVtSiBSdQL2kuPsu1XNpVWHOXgsIz1yIvCA2Si5wJaJv4cMlr01px1QPoseXUteWyMGtAaxom8DVayRcCWtMSJIyx1HucGMcGgnF0BreJJFwW2G9mq332X8S5pVwqWc4iO2foZTVmPDS11pszxzee0ewL+SFOoj+pT7Np92IC3UqDsHD8xH1UX6HbvcO7yQd4jNp5FJlocMHEciQtIJP0Ruce0KDdGkESZEiYF8TfAJgntCzN0nVHxntg/UKdXStRw1SQOQE8pRHV6a1qtBj6RosoUGtYGbZhqF7tXaVNTFxc447mjcgGhLaKTqjnMDw7WY9pxcx7SCAcnYwd6FGtxWrQ9v2VZtTiJyO4wcjBMHIkFZiGpn27e2W2pTsfVagbs6QIa5kufqkAsNSlGrTcGkkh7gRJhpi8FZuj7qxeGvoB9KA5tV+zIggBokFhEmMZuWuy2vZWbY2iow2dz3ajxLqr2ucHVIYD7xgA65GrJF9ysBDbZanOaGNpm0Bz4uc9znOpm7Ek6kCZiTffHPDHW/X21M3Qb0xaGVw0aoLWskMLXNBDRABYS0wNUXHJYaFoWPSFqNR7nnMqltoIMyulM2erU1nF28+CjKi4gmRdwv8IThp3jv81UIpMbfhPYpCnvIHOI8CraNoIMC84CATPJBbXrlwbIiJyIxAj6LHWcjbtGVqgJ2D9bG+QCnpdE7W8fwQDOJeBA4y6fqpcLUvXP2XNnRlnJv/ijsFapdeutFMcfDsXC9ErRVsdlp2cuks1piPie50Z4a2MouOkdTMz2AryZR7l68cvUOl6uOPhd3fZRFnBEnDdI9Rwhc47pC44iebRw4qbekrrrh+X/AMlNV2dCbPlGPFsAbscOCiaET7JIEC4tv5mZI7kB/wCpjnHH2MeftKR6UnOMflPcPa5JqbDYspJwPe3wg48yovspyBIwAAH+Um6/d3oR/wBU5zfnc4TwxMJx0pZu7JdCarsKNsrpIIg4zAjmOPF0pqej3ETdfvF/+R+gA4IcOlDcIEZD2vG5S/6np5hp5l5+yamzC6N6hO4la/3FaB/TcL4OsRJ4yOxZqmi7QBJpk4YQfpz3ZLo5UgSfmKRJ3qDrNUaYLHibxu7b7sVFtKoZOo+B+B3C4kjFLKSPMKGrfiPoltIuJA5wP94KTXSJmQe5SylZokrNX0TQf79Jh7L+0ohqpQfXJLKAanROyH+VHIn7rK/oVZzhrDnqn/8AK6gFS+iu0prDj39BKeTu9gP3VJ6Bt+Zn5IXbdm5SgbirvJpDgX9AxvZ3OCod0D/4d7h9l6J6y7E+rnPgm8ppDzR3QR25v5j5Kt3QR+Te54+69O1BfeIz9cIUSwb1eSTjh5Y7oPV+V35meaqd0KrfK7/HzXq+oDkYUXM/D4wnJJxw8o/6XtIEapI4sn6J7fom3VY2rqjowBa+4QBdOGAXqxY3coGnlmnJKccPHndG6+YI/tcqz0fqbx3Fexupg5A89VRNjZ8rO4fYK8hxvHv3DU3jxS/cT948V7A2xMGDG9wx7UxsjD8DD/aPL1KchxvIRoF/zBP+4XfN4L1h2j6fyM7goHRtL5G+I+ivInG8qGgTv8FdT0W5uD3dhIXpjtGUf6YHafNVfu2l8g/0OfNOQ0cFTZVb/Mf+ZyubWrD+Y/8AMV3IsVMYMb3buxMaDcgB2BTc0cay3Wj+o7uB+y0s0had5P8AZ5LqHNHr9FEAYet6bR0us9gtkttdxhzRz1XBbxUdw7j9Vq1cwomms2tKdc+vXNNtCN3erywepUXUxwRVe0O4d/qVLa8vEqeyGKbY8/HzQeugkC+Dyj7lQLuEd32KsYCc/AeSlh6Cy0rEEbj3d+9MxoOY9bplMa4E8OQ9ZrK3SDDcczBHsmMb7jw8QlrTTVoDEjDA3Kh2j6TgZpgz+Fhv7lMW1mF+V8iDIuAv5KQcJJv7SQOeMHnwKIxjQlDHZtu/CB9PVyZ+hKN/sRwDnjLnA9blv2o4fVVmsDlPh/pFoKOhqcQDN/zSR3ghL9xs1ZD3xjfqc7xdxRLa8I7SfrgmFtH4cx7193DP/SllBbtBDJ7u0Nn6wqX6JgF06wmMh4Tdmizqjd5m43ROI/RScZuDiBcTgez6otAlLQzyAQAJjfj3Xi7koP0TVGQOJN+Ui6T39iO1KeYJO4E3T2qo1C33hA7zxiD9kSgBtkq/03YCcI3YykbO8ZZi6RxuxR97pI1SRjnuz+iy0rMxzpIEkXGNbG/4p+ilrQQabp+2fbuwKVShUF8EDkQOSPSGH3Jvv3cTMKvrQvEgSbgYB5CAllALieEffBVgkjAcpv8AWPcujfQ1QNZo4XNM8BDeCdgaTJbN3xNYPoJ396WU5wgG+/Pv3J9QDGRzG/O7sR6tSo7g0X5gYm888B2qWzpgABszIkAA4TJ9YpZTnNSRiPHdxTGnOHh5roH0qZ+HxO+N0Z+EKg2JpwbBv+LEC6QO0d/JLKBDT4EZeahHFFnWUg4QLoMyL8DhyUTYH4kA5YCbhdhkllBop8+31eq9Tfitxs5yE3nDGZggcPooPssZOyGBxBjGfulpTI5l9/2UDTuhaX0f9XyJ4diRpGY8vHcllMjqY3eimNIXXd/6YLWxoO84TkI8sN2ag4ZwPHwB9fRWymR9Ibvrnz7VE0RletThhiDjdcMccOXcokJaUzFgwn1zwVZab7jnmMZ5xHFbnHDsUXRxPd3YpZTDqxgO/CexV1GcvRPFEYn133ZXqupTv9FLKeoPeB+n6Kiq8RBPGfWKSSTLUQyuddIdMTcIv8yhxrVcddw1o1daIYTlfi6ZuM49ySWVlVVNUZCQYEgAOkTPsi4CXDmExe5hPv360OkGZJuwlsGIA4Ym5JJUEbE1uIOtN8XGJEExitT6V8/qkkiIOuHPmPEYLJUc4TBYDjJxJjjnce5JJRVbqzgAQ4AZzvIJ94XG+O5QJqmYc3dBGr3QJEpkkU7K9S8ODYyLcgYx9o349/Aq2DhEmcROHMjl+qSSgzOtXtauqCTd8JuOAIxvx7EnOkE+1GcknsHlzTpILzaHQLxF28GI4/RQqVSRcY8d107kkkGmzWh0aroIwHvTyvlaBByPrkkkrCEGDDhEnhvUdgAIEHLHtib+CZJBW+zsuugyYkZ7+6VZ1aLg/ffIBMmd136pJIIPpOiO30RiVlfZXwQXk33e9Pf2lJJBSaLxA1zB9ke62839t4MDnirH0KrcHOMiCREg9ucZmcEklFQq2Yge0508SZ3fDjzm5TbZnZGd5cCQcUkkFv7tYR7Q5XmPDEKh2iWfDqzmJPoZJJJJEK3WUCLmYjkQ04SZ3Ddmqdiw5MkYxzMfXdekkhKp1gZNxxvwJuMHHduHFQdo+MsiIxz43gZXb0kkspGtoyPaMRiYki7L/QVT9BVXXtIAu338bgnSS0p//9k="
                alt=""
              />
            </div>
            <div className="flex-none w-96 h-60 bg-black border border-gray-300 rounded-xl shadow-lg p-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZipvjKSVA6qNvgGo-0RP5TrEnyLMy8rdtw&s"
                alt=""
              />
            </div>
            <div className="flex-none w-96 h-60 bg-black border border-gray-300 rounded-xl shadow-lg p-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1zhKilBd6geVzyDth_BZbQiBkiOZS-OGP8Q&s"
                alt=""
              />
            </div>
            <div className="flex-none  w-96 h-60 bg-black border border-gray-300 rounded-xl shadow-lg p-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDjbn9TKLa0MfoIjKlIe5sRF7ErqeYLUbZQ&s"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default luxuarycars;
