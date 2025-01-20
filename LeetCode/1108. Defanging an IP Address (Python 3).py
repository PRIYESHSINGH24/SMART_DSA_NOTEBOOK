class Solution:
    def defangIPaddr(self, address: str) -> str:
        defangedIP = ""
        for i in address:
            if i == ".":
                defangedIP += "[.]"
            else:
                defangedIP += i

        return defangedIP
