let modal = new bootstrap.Modal(document.getElementById("mainModal"))
modal.show()

pageMover = {
    s0: {
        moveNext: () => {
            $("s-0").classList.add('d-none')
            $("s-1").classList.remove('d-none')
        }
    },
    s1: {
        movePrev: () => {
            $("s-1").classList.add("d-none")
            $("s-0").classList.remove("d-none")
        },
        moveNext: () => {
            $("s-1").classList.add("d-none")
            $("s-2").classList.remove("d-none")
        }
    },
    s2: {
        movePrev: () => {
            $("s-2").classList.add("d-none")
            $("s-1").classList.remove("d-none")
        }
    }
}

function $(id) {
    return document.getElementById(id)
}