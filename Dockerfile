FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

# base image
FROM node:9.6.1

# set working directory
WORKDIR /src/angularapp

# add `/src/angularapp/node_modules/.bin` to $PATH
ENV PATH /src/angularapp/node_modules/.bin:$PATH

# install and cache app dependencies
COPY Kuiper-IT.Web/package.json /src/angularapp/package.json
RUN npm install
RUN npm install -g @angular/cli@1.7.1

# add app
COPY . /src/angularapp

# start app
CMD ng serve --host 0.0.0.0

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["Kuiper-IT.Web/Kuiper-IT.Web.csproj", "Kuiper-IT.Web/"]
COPY ["Kuiper-IT.Shared/Kuiper-IT.Shared.csproj", "Kuiper-IT.Shared/"]
COPY ["Kuiper-IT.Data/Kuiper-IT.Data.csproj", "Kuiper-IT.Data/"]
RUN dotnet restore "Kuiper-IT.Web/Kuiper-IT.Web.csproj"
COPY . .
WORKDIR "/src/Kuiper-IT.Web"
RUN dotnet build "Kuiper-IT.Web.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Kuiper-IT.Web.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Kuiper-IT.Web.dll"]
