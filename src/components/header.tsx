import { Image, Text, View, TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons'
import colors from "tailwindcss/colors"

type HeaderProps = {
  title: string
  cartQuantityItems?: number
}

export function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image
          className="h-6 w-32"
          source={require('@/assets/logo.png')}
        />
        <Text className="text-xl text-white font-heading">
          {title}
        </Text>
      </View>

      {cartQuantityItems > 0 && (
        <TouchableOpacity className="relative" activeOpacity={0.7}>
          <View className="justify-center items-center w-4 h-4 rounded-full
          bg-lime-300 top-2 -right-3.5 z-10">
            <Text className="text-slate-900 font-bold text-xs">
              {cartQuantityItems}
            </Text>
          </View>

          <Feather name="shopping-bag" size={24} color={colors.white} />
        </TouchableOpacity>
      )}
    </View>
  )
}