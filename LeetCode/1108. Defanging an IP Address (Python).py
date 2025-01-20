class Solution(object):
    def defangIPaddr(self, address):
        defangedIP = ""

        for i in address:
            if i == ".":
                defangedIP += "[.]"
            else:
                defangedIP += i

        return defangedIP
