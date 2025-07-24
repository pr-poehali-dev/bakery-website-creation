import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const bakeryItems = [
    {
      id: 1,
      name: "Хлеб на закваске",
      description: "Ароматный хлеб из натуральной закваски, выпекаемый по старинным рецептам",
      price: "350 ₽",
      image: "/img/4a9458f3-466b-4d5c-95ab-b314ab112dd9.jpg"
    },
    {
      id: 2,
      name: "Круассаны",
      description: "Слоеные круассаны с хрустящей корочкой и нежной серединкой",
      price: "180 ₽",
      image: "/img/e55dd0ee-92c3-4cdf-ac83-eec126a19954.jpg"
    },
    {
      id: 3,
      name: "Домашние пирожки",
      description: "Пышные пирожки с разнообразными начинками, как у бабушки",
      price: "120 ₽",
      image: "/img/96c8ab6f-e294-4687-8b57-eda588e36c23.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="Cookie" size={32} />
            <h1 className="text-2xl font-bold">Сдобная сказка</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-secondary-foreground transition-colors">Главная</a>
            <a href="#about" className="hover:text-secondary-foreground transition-colors">О нас</a>
            <a href="#menu" className="hover:text-secondary-foreground transition-colors">Меню</a>
            <a href="#contact" className="hover:text-secondary-foreground transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-primary mb-6">
            Добро пожаловать в мир домашней выпечки
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Каждый день мы создаем для вас свежую выпечку по традиционным рецептам, 
            передающимся из поколения в поколение
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-primary hover:bg-secondary">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Заказать сейчас
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="MapPin" size={20} className="mr-2" />
              Наш адрес
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-6 bg-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Наше меню</h2>
            <p className="text-lg text-muted-foreground">Свежая выпечка каждый день</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bakeryItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-primary">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <Button size="sm">
                      <Icon name="Plus" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">О нашей пекарне</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "Сдобная сказка" — это семейная пекарня, которая уже более 15 лет радует жителей города 
                свежей и вкусной выпечкой. Мы используем только натуральные ингредиенты и проверенные 
                временем рецепты.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Наша команда мастеров-пекарей работает с раннего утра, чтобы к открытию пекарни 
                на полках появились ароматные хлеба, пышные булочки и нежные пирожные.
              </p>
              <div className="flex space-x-8">
                <div className="text-center">
                  <Icon name="Users" size={32} className="mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <Icon name="Heart" size={32} className="mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <Icon name="Award" size={32} className="mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">видов выпечки</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-secondary/10 rounded-lg">
                <Icon name="Wheat" size={24} className="text-primary" />
                <span className="text-muted-foreground">Натуральные ингредиенты</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-secondary/10 rounded-lg">
                <Icon name="Clock" size={24} className="text-primary" />
                <span className="text-muted-foreground">Свежая выпечка каждый день</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-secondary/10 rounded-lg">
                <Icon name="Star" size={24} className="text-primary" />
                <span className="text-muted-foreground">Традиционные рецепты</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-secondary/10 rounded-lg">
                <Icon name="Shield" size={24} className="text-primary" />
                <span className="text-muted-foreground">Качество и безопасность</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Icon name="MapPin" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p>ул. Пекарская, 15<br />Москва, 123456</p>
            </div>
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p>+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon name="Clock" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Время работы</h3>
              <p>Пн-Вс: 7:00 - 21:00</p>
            </div>
          </div>
          <Button variant="secondary" size="lg">
            <Icon name="MessageSquare" size={20} className="mr-2" />
            Написать нам
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 px-6 text-center">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Cookie" size={24} />
            <span className="text-xl font-bold">Сдобная сказка</span>
          </div>
          <p className="text-sm">© 2024 Пекарня "Сдобная сказка". Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;